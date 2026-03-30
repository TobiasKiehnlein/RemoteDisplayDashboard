import { computed } from 'vue'

const ACTIVE = new Set(['playing', 'paused', 'buffering', 'on'])

export function useMediaPlayers(hassRef) {
  const mediaPlayers = computed(() => {
    if (!hassRef?.value?.states) return []
    return Object.values(hassRef.value.states)
      .filter((s) => s.entity_id.startsWith('media_player.'))
      .filter((s) => s.state !== 'unavailable')
      .sort((a, b) => {
        // Active players first, then alphabetical
        const aActive = ACTIVE.has(a.state) ? 0 : 1
        const bActive = ACTIVE.has(b.state) ? 0 : 1
        if (aActive !== bActive) return aActive - bActive
        return (a.attributes.friendly_name ?? a.entity_id).localeCompare(
          b.attributes.friendly_name ?? b.entity_id,
        )
      })
  })

  return { mediaPlayers }
}
