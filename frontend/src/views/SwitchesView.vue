<template>
  <div class="switches-view">
    <div v-if="!hass" class="empty">Connecting…</div>
    <div v-else-if="visibleSwitches.length" class="card-grid">
      <SwitchCard v-for="e in visibleSwitches" :key="e.entity_id" :state="e" :hass="hass" />
    </div>
    <div v-else class="empty">All hidden</div>
  </div>
</template>

<script setup>
import { computed, inject } from 'vue'
import SwitchCard from '../components/SwitchCard.vue'
import { useControls } from '../composables/useControls.js'
import { useSettings } from '../composables/useSettings.js'

const hass = inject('hass')
const { switches } = useControls(hass)
const { isVisible, sortedByOrder } = useSettings()

const visibleSwitches = computed(() => sortedByOrder(switches.value.filter((e) => isVisible(e.entity_id))))
</script>

<style scoped>
.switches-view {
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
