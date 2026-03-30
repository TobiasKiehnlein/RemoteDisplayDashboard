<template>
  <div
    class="climate-pill"
    :class="{ 'climate-pill--active': isActive, 'climate-pill--heating': isHeating }"
    :style="pillStyle"
    @click="togglePower"
  >
    <div v-if="isActive" class="climate-fill" :style="fillStyle" />
    <div v-if="isActive" class="climate-crest" :style="crestStyle" />

    <div class="climate-info">
      <span class="climate-name">{{ friendlyName }}</span>
      <span v-if="currentTemp !== null" class="climate-current">{{ currentTemp }}°</span>
      <span class="climate-action">{{ actionLabel }}</span>
    </div>

    <div class="climate-controls" @click.stop @pointerdown.stop>
      <button class="ctrl" @click="adjust(-1)">−</button>
      <span class="climate-target">{{ targetTemp !== null ? targetTemp + '°' : '—' }}</span>
      <button class="ctrl" @click="adjust(+1)">+</button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  state: { type: Object, required: true },
  hass:  { type: Object, default: null },
})

const friendlyName = computed(
  () => props.state.attributes.friendly_name
    ?? props.state.entity_id.split('.')[1].replace(/_/g, ' '),
)

const isActive  = computed(() => props.state.state !== 'off')
const isHeating = computed(() => props.state.attributes.hvac_action === 'heating')

const currentTemp = computed(() => props.state.attributes.current_temperature ?? null)
const targetTemp  = computed(() => props.state.attributes.temperature ?? null)

const actionLabel = computed(() => {
  if (!isActive.value) return 'Off'
  const map = { heating: 'Heating…', idle: 'Idle', cooling: 'Cooling…', drying: 'Drying…', fan: 'Fan' }
  return map[props.state.attributes.hvac_action] ?? props.state.state
})

// Fill = current temperature as thermometer (10°C → 35°C range)
const fillPct = computed(() => {
  if (currentTemp.value === null || !isActive.value) return 0
  return Math.round(Math.max(0, Math.min(100, ((currentTemp.value - 10) / 25) * 100)))
})

const pillStyle = computed(() => {
  if (!isActive.value) return {}
  const b = fillPct.value / 100
  return {
    boxShadow: `0 0 ${12 + b * 18}px rgba(249, 115, 22, ${0.05 + b * 0.1})`,
    borderColor: `rgba(249, 115, 22, ${0.12 + b * 0.2})`,
  }
})

const fillStyle  = computed(() => ({ height: fillPct.value + '%' }))
const crestStyle = computed(() => ({ bottom: fillPct.value + '%' }))

function togglePower() {
  const mode = isActive.value ? 'off' : 'heat'
  props.hass?.callService('climate', 'set_hvac_mode', {
    entity_id: props.state.entity_id,
    hvac_mode: mode,
  })
}

function adjust(direction) {
  const step = props.state.attributes.target_temp_step ?? 0.5
  const min  = props.state.attributes.min_temp ?? 5
  const max  = props.state.attributes.max_temp ?? 35
  const next = Math.max(min, Math.min(max, (targetTemp.value ?? 20) + direction * step))
  props.hass?.callService('climate', 'set_temperature', {
    entity_id: props.state.entity_id,
    temperature: Math.round(next * 2) / 2,
  })
}
</script>

<style scoped>
.climate-pill {
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  background: #0c0e18;
  border: 1px solid #1a1e33;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  aspect-ratio: 1 / 2;
  display: flex;
  flex-direction: column;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.climate-fill {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  border-radius: 0 0 0.9rem 0.9rem;
  background: linear-gradient(
    to top,
    rgba(120, 30, 5,  0.0)   0%,
    rgba(194, 65, 12, 0.14)  50%,
    rgba(249, 115, 22, 0.28) 85%,
    rgba(253, 186, 116, 0.34) 100%
  );
  transition: height 0.6s ease;
  will-change: height;
}

.climate-crest {
  position: absolute;
  left: 8%; right: 8%;
  height: 1px;
  background: rgba(254, 215, 170, 0.8);
  border-radius: 1px;
  box-shadow: 0 0 6px 1px rgba(249, 115, 22, 0.5);
  transform: translateY(1px);
  transition: bottom 0.6s ease;
  will-change: bottom;
  pointer-events: none;
}

.climate-info {
  position: absolute;
  top: 0; left: 0; right: 0;
  padding: 0.65rem 0.6rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  pointer-events: none;
}

.climate-name {
  font-size: 0.75rem;
  font-weight: 600;
  color: #fff;
  text-shadow: 0 1px 6px rgba(0,0,0,0.9);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.climate-current {
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 1px 8px rgba(0,0,0,0.9);
  line-height: 1.1;
  font-variant-numeric: tabular-nums;
}

.climate-action {
  font-size: 0.6rem;
  color: rgba(255,255,255,0.25);
}
.climate-pill--heating .climate-action { color: rgba(253, 186, 116, 0.7); }

.climate-controls {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.4rem 0.3rem 0.55rem;
  background: linear-gradient(to top, rgba(12, 14, 24, 0.85), transparent);
}

.climate-target {
  font-size: 0.75rem;
  font-weight: 600;
  color: rgba(253, 186, 116, 0.85);
  font-variant-numeric: tabular-nums;
}

.ctrl {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border: none;
  background: rgba(255,255,255,0.06);
  border-radius: 50%;
  color: rgba(255,255,255,0.6);
  cursor: pointer;
  font-size: 1rem;
  line-height: 1;
  transition: background 0.15s, color 0.15s;
}
.ctrl:hover { background: rgba(255,255,255,0.12); color: #fff; }
</style>
