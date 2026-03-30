<template>
  <div class="sensor-pill" :class="`sensor-pill--${deviceClass}`" :style="pillStyle">
    <div class="sensor-fill" :style="fillStyle" />
    <div v-if="fillPct > 0" class="sensor-crest" :style="crestStyle" />
    <div class="sensor-info">
      <span class="sensor-name">{{ friendlyName }}</span>
      <span class="sensor-value">{{ state.state }}<span class="sensor-unit">{{ unit }}</span></span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  state: { type: Object, required: true },
})

const friendlyName = computed(
  () => props.state.attributes.friendly_name
    ?? props.state.entity_id.split('.')[1].replace(/_/g, ' '),
)

const deviceClass = computed(() => props.state.attributes.device_class ?? 'generic')
const unit        = computed(() => props.state.attributes.unit_of_measurement ?? '')

const fillPct = computed(() => {
  const val = parseFloat(props.state.state)
  if (isNaN(val)) return 0
  if (deviceClass.value === 'temperature') return Math.round(Math.max(0, Math.min(100, ((val - 10) / 30) * 100)))
  if (deviceClass.value === 'humidity')    return Math.round(Math.max(0, Math.min(100, val)))
  return 0
})

const fillStyle  = computed(() => ({ height: fillPct.value + '%' }))
const crestStyle = computed(() => ({ bottom: fillPct.value + '%' }))

const pillStyle = computed(() => {
  if (fillPct.value === 0) return {}
  const b = fillPct.value / 100
  if (deviceClass.value === 'temperature') return {
    boxShadow:   `0 0 ${10 + b * 14}px rgba(249, 115, 22, ${0.04 + b * 0.08})`,
    borderColor: `rgba(249, 115, 22, ${0.1 + b * 0.2})`,
  }
  if (deviceClass.value === 'humidity') return {
    boxShadow:   `0 0 ${10 + b * 14}px rgba(14, 165, 233, ${0.04 + b * 0.08})`,
    borderColor: `rgba(14, 165, 233, ${0.1 + b * 0.2})`,
  }
  return {}
})
</script>

<style scoped>
.sensor-pill {
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  background: #0c0e18;
  border: 1px solid #1a1e33;
  user-select: none;
  aspect-ratio: 1 / 2;
  display: flex;
  flex-direction: column;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.sensor-fill {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  border-radius: 0 0 0.9rem 0.9rem;
  transition: height 0.6s ease;
  will-change: height;
}

.sensor-pill--temperature .sensor-fill {
  background: linear-gradient(
    to top,
    rgba(120, 30, 5,   0.0)   0%,
    rgba(194, 65, 12,  0.14)  50%,
    rgba(249, 115, 22, 0.28)  85%,
    rgba(253, 186, 116, 0.34) 100%
  );
}

.sensor-pill--humidity .sensor-fill {
  background: linear-gradient(
    to top,
    rgba(3, 55, 90,    0.0)   0%,
    rgba(7, 89, 133,   0.14)  50%,
    rgba(14, 165, 233, 0.26)  85%,
    rgba(125, 211, 252, 0.32) 100%
  );
}

.sensor-crest {
  position: absolute;
  left: 8%; right: 8%;
  height: 1px;
  border-radius: 1px;
  transform: translateY(1px);
  transition: bottom 0.6s ease;
  will-change: bottom;
  pointer-events: none;
}
.sensor-pill--temperature .sensor-crest {
  background: rgba(254, 215, 170, 0.8);
  box-shadow: 0 0 6px 1px rgba(249, 115, 22, 0.5);
}
.sensor-pill--humidity .sensor-crest {
  background: rgba(186, 230, 253, 0.8);
  box-shadow: 0 0 6px 1px rgba(14, 165, 233, 0.5);
}

.sensor-info {
  position: absolute;
  top: 0; left: 0; right: 0;
  padding: 0.65rem 0.6rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  pointer-events: none;
}

.sensor-name {
  font-size: 0.75rem;
  font-weight: 600;
  color: #fff;
  text-shadow: 0 1px 6px rgba(0,0,0,0.9);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.sensor-value {
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 1px 8px rgba(0,0,0,0.9);
  line-height: 1.1;
  font-variant-numeric: tabular-nums;
}

.sensor-unit {
  font-size: 0.65rem;
  font-weight: 400;
  color: rgba(255,255,255,0.5);
  margin-left: 0.1rem;
}
</style>
