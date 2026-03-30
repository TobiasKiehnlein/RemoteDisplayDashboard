<template>
  <div class="presence-view">
    <div v-if="!hass" class="empty">Connecting…</div>
    <div v-else-if="visiblePersons.length" class="card-grid">
      <PresenceCard v-for="e in visiblePersons" :key="e.entity_id" :state="e" />
    </div>
    <div v-else class="empty">All hidden</div>
  </div>
</template>

<script setup>
import { computed, inject } from 'vue'
import PresenceCard from '../components/PresenceCard.vue'
import { useControls } from '../composables/useControls.js'
import { useSettings } from '../composables/useSettings.js'

const hass = inject('hass')
const { persons } = useControls(hass)
const { isVisible, sortedByOrder } = useSettings()

const visiblePersons = computed(() => sortedByOrder(persons.value.filter((e) => isVisible(e.entity_id))))
</script>

<style scoped>
.presence-view {
  padding: 0.75rem 0.5rem 0;
}
.card-grid {
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
