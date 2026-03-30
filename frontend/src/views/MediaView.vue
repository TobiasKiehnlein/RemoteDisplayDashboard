<template>
  <div class="media-view">
    <div v-if="!hass" class="empty">Connecting…</div>

    <template v-else-if="visiblePlayers.length">
      <div class="media-grid">
        <MediaCard
          v-for="player in visiblePlayers"
          :key="player.entity_id"
          :state="player"
          :hass="hass"
        />
      </div>
    </template>

    <div v-else class="empty">No media players found</div>
  </div>
</template>

<script setup>
import { computed, inject } from 'vue'
import MediaCard from '../components/MediaCard.vue'
import { useMediaPlayers } from '../composables/useMediaPlayers.js'
import { useSettings } from '../composables/useSettings.js'

const hass = inject('hass')
const { mediaPlayers } = useMediaPlayers(hass)
const { isVisible, sortedByOrder } = useSettings()

const visiblePlayers = computed(() => sortedByOrder(mediaPlayers.value.filter((p) => isVisible(p.entity_id))))
</script>

<style scoped>
.media-view {
  padding: 0.75rem 0.5rem 0;
}

.media-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(85px, 130px));
  justify-content: center;
  gap: 0.35rem;
}

.empty {
  padding: 3rem 0;
  text-align: center;
  color: #374151;
  font-size: 0.8rem;
}
</style>
