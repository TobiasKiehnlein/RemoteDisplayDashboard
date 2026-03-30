<template>
  <component
    :is="cardComponent"
    v-if="entityState && cardComponent"
    :state="entityState"
    :hass="hass"
  />
  <div v-else-if="entityState" class="unknown-card">
    {{ entityState.attributes.friendly_name ?? entityId }}
  </div>
</template>

<script setup>
import { computed, inject } from 'vue'
import LightCard    from './LightCard.vue'
import MediaCard    from './MediaCard.vue'
import SwitchCard   from './SwitchCard.vue'
import ClimateCard  from './ClimateCard.vue'
import LockCard     from './LockCard.vue'
import VacuumCard   from './VacuumCard.vue'
import PresenceCard from './PresenceCard.vue'
import SensorCard   from './SensorCard.vue'

const props = defineProps({ entityId: { type: String, required: true } })

const hass = inject('hass')

const CARD_MAP = {
  light:        LightCard,
  media_player: MediaCard,
  switch:       SwitchCard,
  climate:      ClimateCard,
  lock:         LockCard,
  vacuum:       VacuumCard,
  person:       PresenceCard,
  sensor:       SensorCard,
}

const domain      = computed(() => props.entityId.split('.')[0])
const entityState = computed(() => hass?.value?.states?.[props.entityId])
const cardComponent = computed(() => CARD_MAP[domain.value] ?? null)
</script>

<style scoped>
.unknown-card {
  aspect-ratio: 1 / 2;
  background: #0c0e18;
  border: 1px solid #1a1e33;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6rem;
  color: #374151;
  overflow: hidden;
  padding: 0.5rem;
  text-align: center;
  word-break: break-all;
}
</style>
