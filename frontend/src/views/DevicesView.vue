<template>
  <div class="devices-view">
    <div v-if="!hass" class="empty">Connecting…</div>
    <div v-else-if="visibleLocks.length || visibleVacuums.length" class="card-grid">
      <LockCard   v-for="e in visibleLocks"   :key="e.entity_id" :state="e" :hass="hass" />
      <VacuumCard v-for="e in visibleVacuums" :key="e.entity_id" :state="e" :hass="hass" />
    </div>
    <div v-else class="empty">All hidden</div>
  </div>
</template>

<script setup>
import { computed, inject } from 'vue'
import LockCard   from '../components/LockCard.vue'
import VacuumCard from '../components/VacuumCard.vue'
import { useControls } from '../composables/useControls.js'
import { useSettings } from '../composables/useSettings.js'

const hass = inject('hass')
const { locks, vacuums } = useControls(hass)
const { isVisible, sortedByOrder } = useSettings()

const visibleLocks   = computed(() => sortedByOrder(locks.value.filter((e)   => isVisible(e.entity_id))))
const visibleVacuums = computed(() => sortedByOrder(vacuums.value.filter((e) => isVisible(e.entity_id))))
</script>

<style scoped>
.devices-view {
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
