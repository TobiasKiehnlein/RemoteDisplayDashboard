<template>
  <div class="climate-view">
    <div v-if="!hass" class="empty">Connecting…</div>
    <template v-else>
      <section v-if="visibleClimate.length" class="section">
        <div class="section-label">Climate</div>
        <div class="card-grid">
          <ClimateCard v-for="e in visibleClimate" :key="e.entity_id" :state="e" :hass="hass" />
        </div>
      </section>

      <section v-if="visibleTemp.length" class="section">
        <div class="section-label">Temperature</div>
        <div class="card-grid">
          <SensorCard v-for="e in visibleTemp" :key="e.entity_id" :state="e" />
        </div>
      </section>

      <section v-if="visibleHumidity.length" class="section">
        <div class="section-label">Humidity</div>
        <div class="card-grid">
          <SensorCard v-for="e in visibleHumidity" :key="e.entity_id" :state="e" />
        </div>
      </section>

      <div v-if="!visibleClimate.length && !visibleTemp.length && !visibleHumidity.length" class="empty">
        All hidden
      </div>
    </template>
  </div>
</template>

<script setup>
import { computed, inject } from 'vue'
import ClimateCard from '../components/ClimateCard.vue'
import SensorCard  from '../components/SensorCard.vue'
import { useControls } from '../composables/useControls.js'
import { useSettings } from '../composables/useSettings.js'

const hass = inject('hass')
const { climate, tempSensors, humiditySensors } = useControls(hass)
const { isVisible, sortedByOrder } = useSettings()

const visibleClimate  = computed(() => sortedByOrder(climate.value.filter((e)      => isVisible(e.entity_id))))
const visibleTemp     = computed(() => sortedByOrder(tempSensors.value.filter((e)  => isVisible(e.entity_id))))
const visibleHumidity = computed(() => sortedByOrder(humiditySensors.value.filter((e) => isVisible(e.entity_id))))
</script>

<style scoped>
.climate-view {
  padding: 0.75rem 0.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.section-label {
  font-size: 0.6rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #374151;
  padding: 0 0.25rem 0.4rem;
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
