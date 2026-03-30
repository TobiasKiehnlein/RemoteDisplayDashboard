import { ref, watch, computed } from 'vue'

export function useAreaLights(hassRef) {
  const areas = ref([])
  const entityRegistry = ref([])
  const deviceRegistry = ref([])
  let fetched = false

  watch(
    hassRef,
    async (h) => {
      if (!h?.connection || fetched) return
      fetched = true
      try {
        const [areasResult, entitiesResult, devicesResult] = await Promise.all([
          h.connection.sendMessagePromise({ type: 'config/area_registry/list' }),
          h.connection.sendMessagePromise({ type: 'config/entity_registry/list' }),
          h.connection.sendMessagePromise({ type: 'config/device_registry/list' }),
        ])
        areas.value = areasResult
        entityRegistry.value = entitiesResult
        deviceRegistry.value = devicesResult
      } catch (e) {
        console.warn('[useAreaLights] Could not fetch registries:', e)
      }
    },
    { immediate: true },
  )

  const lightsByArea = computed(() => {
    if (!hassRef?.value?.states) return []

    // device_id → area_id
    const deviceAreaMap = {}
    for (const device of deviceRegistry.value) {
      if (device.area_id) deviceAreaMap[device.id] = device.area_id
    }

    // entity_id → area_id  (entity-level override, else fall back to device)
    const entityAreaMap = {}
    for (const entity of entityRegistry.value) {
      if (entity.disabled_by) continue
      const areaId = entity.area_id ?? (entity.device_id ? deviceAreaMap[entity.device_id] : null)
      if (areaId) entityAreaMap[entity.entity_id] = areaId
    }

    // area_id → display name
    const areaNameMap = {}
    for (const area of areas.value) {
      areaNameMap[area.area_id] = area.name
    }

    // collect all light states
    const lights = Object.values(hassRef.value.states).filter((s) =>
      s.entity_id.startsWith('light.'),
    )

    // group by area name
    const grouped = {}
    for (const light of lights) {
      const areaId = entityAreaMap[light.entity_id]
      const areaName = areaId ? (areaNameMap[areaId] ?? 'Unknown') : 'Unassigned'
      ;(grouped[areaName] ??= []).push(light)
    }

    return Object.entries(grouped)
      .sort(([a], [b]) => {
        if (a === 'Unassigned') return 1
        if (b === 'Unassigned') return -1
        return a.localeCompare(b)
      })
      .map(([name, roomLights]) => ({
        name,
        lights: roomLights.sort((a, b) =>
          (a.attributes.friendly_name ?? a.entity_id).localeCompare(
            b.attributes.friendly_name ?? b.entity_id,
          ),
        ),
      }))
  })

  return { lightsByArea }
}
