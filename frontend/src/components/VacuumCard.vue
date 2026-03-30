<template>
  <div
    class="vacuum-pill"
    :class="{ 'vacuum-pill--active': isActive }"
    :style="pillStyle"
  >
    <div v-if="battery !== null" class="vacuum-fill" :style="fillStyle" />
    <div v-if="battery !== null" class="vacuum-crest" :style="crestStyle" />

    <div class="vacuum-info">
      <span class="vacuum-name">{{ friendlyName }}</span>
      <span class="vacuum-status">{{ statusLabel }}</span>
      <span v-if="battery !== null" class="vacuum-bat">{{ battery }}%</span>
    </div>

    <div class="vacuum-controls" @click.stop @pointerdown.stop>
      <!-- Start / Pause -->
      <button class="ctrl ctrl--main" @click="mainAction" :disabled="isReturning">
        <svg v-if="isCleaning || isReturning" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6zm8-14v14h4V5z"/></svg>
        <svg v-else viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
      </button>
      <!-- Return home -->
      <button class="ctrl" @click="returnHome" :disabled="isDocked">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
      </button>
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

const isDocked    = computed(() => props.state.state === 'docked')
const isCleaning  = computed(() => props.state.state === 'cleaning')
const isReturning = computed(() => props.state.state === 'returning')
const isPaused    = computed(() => props.state.state === 'paused')
const isActive    = computed(() => isCleaning.value || isReturning.value || isPaused.value)

const statusLabel = computed(() => ({
  docked: 'Docked', cleaning: 'Cleaning', returning: 'Returning', paused: 'Paused', idle: 'Idle', error: 'Error',
}[props.state.state] ?? props.state.state))

const battery = computed(() => props.state.attributes.battery_level ?? null)

const fillPct = computed(() => battery.value ?? 0)
const fillStyle  = computed(() => ({ height: fillPct.value + '%' }))
const crestStyle = computed(() => ({ bottom: fillPct.value + '%' }))

const pillStyle = computed(() => {
  if (!isActive.value) return {}
  const b = fillPct.value / 100
  return {
    boxShadow: `0 0 ${12 + b * 14}px rgba(14, 165, 233, ${0.05 + b * 0.08})`,
    borderColor: `rgba(14, 165, 233, ${0.12 + b * 0.18})`,
  }
})

function mainAction() {
  if (isCleaning.value) {
    props.hass?.callService('vacuum', 'pause', { entity_id: props.state.entity_id })
  } else {
    props.hass?.callService('vacuum', 'start', { entity_id: props.state.entity_id })
  }
}

function returnHome() {
  props.hass?.callService('vacuum', 'return_to_base', { entity_id: props.state.entity_id })
}
</script>

<style scoped>
.vacuum-pill {
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  background: #0c0e18;
  border: 1px solid #1a1e33;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  aspect-ratio: 1 / 2;
  display: flex;
  flex-direction: column;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.vacuum-fill {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  border-radius: 0 0 0.9rem 0.9rem;
  background: linear-gradient(
    to top,
    rgba(3, 55, 90,  0.0)   0%,
    rgba(7, 89, 133, 0.14)  50%,
    rgba(14, 165, 233, 0.26) 85%,
    rgba(125, 211, 252, 0.32) 100%
  );
  transition: height 0.6s ease;
  will-change: height;
}

.vacuum-crest {
  position: absolute;
  left: 8%; right: 8%;
  height: 1px;
  background: rgba(186, 230, 253, 0.8);
  border-radius: 1px;
  box-shadow: 0 0 6px 1px rgba(14, 165, 233, 0.5);
  transform: translateY(1px);
  transition: bottom 0.6s ease;
  will-change: bottom;
  pointer-events: none;
}

.vacuum-info {
  position: absolute;
  top: 0; left: 0; right: 0;
  padding: 0.65rem 0.6rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  pointer-events: none;
}

.vacuum-name {
  font-size: 0.75rem;
  font-weight: 600;
  color: #fff;
  text-shadow: 0 1px 6px rgba(0,0,0,0.9);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.vacuum-status {
  font-size: 0.65rem;
  color: rgba(255,255,255,0.25);
}
.vacuum-pill--active .vacuum-status { color: rgba(186, 230, 253, 0.7); }

.vacuum-bat {
  position: absolute;
  bottom: 2.4rem;
  right: 0.55rem;
  font-size: 0.65rem;
  color: rgba(14, 165, 233, 0.65);
  font-variant-numeric: tabular-nums;
  pointer-events: none;
  text-shadow: 0 1px 4px rgba(0,0,0,0.8);
}

.vacuum-controls {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.4rem 0.3rem 0.55rem;
  background: linear-gradient(to top, rgba(12, 14, 24, 0.85), transparent);
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
  padding: 5px;
  transition: background 0.15s, color 0.15s;
}
.ctrl:hover { background: rgba(255,255,255,0.12); color: #fff; }
.ctrl:disabled { opacity: 0.25; pointer-events: none; }

.ctrl--main {
  width: 34px;
  height: 34px;
  background: rgba(14, 165, 233, 0.2);
  color: rgba(186, 230, 253, 0.9);
  padding: 7px;
}
.ctrl--main:hover { background: rgba(14, 165, 233, 0.4) !important; color: #fff; }
.vacuum-pill--active .ctrl--main { background: rgba(14, 165, 233, 0.35); color: #fff; }
</style>
