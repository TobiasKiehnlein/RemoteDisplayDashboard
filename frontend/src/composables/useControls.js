import { computed } from 'vue'

export function useControls(hassRef) {
  function getStates(domain) {
    if (!hassRef?.value?.states) return []
    return Object.values(hassRef.value.states)
      .filter((s) => s.entity_id.startsWith(domain + '.') && s.state !== 'unavailable')
  }

  function alpha(a, b) {
    return (a.attributes.friendly_name ?? a.entity_id)
      .localeCompare(b.attributes.friendly_name ?? b.entity_id)
  }

  const switches = computed(() => getStates('switch').sort(alpha))
  const climate  = computed(() => getStates('climate').sort(alpha))
  const locks    = computed(() => getStates('lock').sort(alpha))
  const vacuums  = computed(() => getStates('vacuum').sort(alpha))
  const persons  = computed(() => getStates('person').sort(alpha))

  const tempSensors = computed(() =>
    getStates('sensor')
      .filter((s) => s.attributes.device_class === 'temperature' && s.state !== 'unknown')
      .sort(alpha),
  )

  const humiditySensors = computed(() =>
    getStates('sensor')
      .filter((s) => s.attributes.device_class === 'humidity' && s.state !== 'unknown')
      .sort(alpha),
  )

  const hasClimate  = computed(() => climate.value.length > 0 || tempSensors.value.length > 0 || humiditySensors.value.length > 0)
  const hasSwitches = computed(() => switches.value.length > 0)
  const hasDevices  = computed(() => locks.value.length > 0 || vacuums.value.length > 0)
  const hasPresence = computed(() => persons.value.length > 0)
  const hasAny      = computed(() => hasClimate.value || hasSwitches.value || hasDevices.value || hasPresence.value)

  return {
    switches, climate, locks, vacuums, persons, tempSensors, humiditySensors,
    hasClimate, hasSwitches, hasDevices, hasPresence, hasAny,
  }
}
