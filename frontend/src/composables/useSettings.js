import { ref, watch } from 'vue'

const HIDDEN_KEY = 'vd-hidden-entities'
const GROUP_KEY  = 'vd-group-by-room'
const ORDER_KEY  = 'vd-entity-order'

function loadSet(key) {
  try { return new Set(JSON.parse(localStorage.getItem(key) ?? '[]')) }
  catch { return new Set() }
}

// Module-level so state is shared across all component instances
const hidden      = ref(loadSet(HIDDEN_KEY))
const groupByRoom = ref(localStorage.getItem(GROUP_KEY) !== 'false')
const entityOrder = ref(JSON.parse(localStorage.getItem(ORDER_KEY) ?? '[]'))

watch(hidden,      (v) => localStorage.setItem(HIDDEN_KEY, JSON.stringify([...v])), { deep: true })
watch(groupByRoom, (v) => localStorage.setItem(GROUP_KEY, String(v)))
watch(entityOrder, (v) => localStorage.setItem(ORDER_KEY, JSON.stringify(v)), { deep: true })

export function useSettings() {
  function toggle(entityId) {
    const next = new Set(hidden.value)
    next.has(entityId) ? next.delete(entityId) : next.add(entityId)
    hidden.value = next
  }

  function isVisible(entityId) {
    return !hidden.value.has(entityId)
  }

  function toggleGroupByRoom() {
    groupByRoom.value = !groupByRoom.value
  }

  function setOrder(entityIds) {
    entityOrder.value = [...entityIds]
  }

  function sortedByOrder(entities) {
    const order = entityOrder.value
    if (!order.length) return entities
    return [...entities].sort((a, b) => {
      const ai = order.indexOf(a.entity_id)
      const bi = order.indexOf(b.entity_id)
      if (ai === -1 && bi === -1) return 0
      if (ai === -1) return 1
      if (bi === -1) return -1
      return ai - bi
    })
  }

  return { hidden, toggle, isVisible, groupByRoom, toggleGroupByRoom, entityOrder, setOrder, sortedByOrder }
}
