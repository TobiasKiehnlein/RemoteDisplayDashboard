<template>
  <div class="lights-view">
    <div v-if="!hass" class="empty">Connecting…</div>

    <template v-else-if="visibleLightsByArea.length">
      <section v-for="room in visibleLightsByArea" :key="room.name" class="room">
        <div v-if="room.name" class="room-label">{{ room.name }}</div>
        <div class="room-grid">
          <LightCard
            v-for="light in room.lights"
            :key="light.entity_id"
            :state="light"
            :hass="hass"
          />
        </div>
      </section>
    </template>

    <div v-else class="empty">Loading…</div>
  </div>
</template>

<script setup>
import { computed, inject } from 'vue'
import LightCard from '../components/LightCard.vue'
import { useAreaLights } from '../composables/useAreaLights.js'
import { useSettings } from '../composables/useSettings.js'

const hass = inject('hass')
const { lightsByArea } = useAreaLights(hass)
const { isVisible, groupByRoom, sortedByOrder } = useSettings()

const visibleLightsByArea = computed(() => {
  const areas = lightsByArea.value
  if (!groupByRoom.value) {
    const flat = sortedByOrder(areas.flatMap((r) => r.lights).filter((l) => isVisible(l.entity_id)))
    return flat.length ? [{ name: null, lights: flat }] : []
  }
  return areas
    .map((room) => ({ ...room, lights: sortedByOrder(room.lights.filter((l) => isVisible(l.entity_id))) }))
    .filter((room) => room.lights.length)
})
</script>

<style scoped>
.lights-view {
  padding: 0.75rem 0.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.room-label {
  font-size: 0.6rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #374151;
  padding: 0 0.25rem 0.4rem;
}

.room-grid {
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
