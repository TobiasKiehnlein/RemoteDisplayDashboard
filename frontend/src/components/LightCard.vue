<template>
  <div
    ref="pillRef"
    class="pill"
    :class="pillClass"
    :style="pillStyle"
    @pointerdown="onPointerDown"
    @pointermove="onPointerMove"
    @pointerup="onPointerUp"
    @pointercancel="cancelDrag"
  >
    <!-- Subtle warm fill from bottom -->
    <div v-if="isOn" class="pill-fill" :style="fillStyle" />

    <!-- Bright crest line at fill boundary -->
    <div v-if="isOn && supportsBrightness" class="pill-thumb" :style="thumbStyle" />

    <!-- Text -->
    <div class="pill-label">
      <span class="pill-name">{{ name }}</span>
      <span v-if="isOn && localBrightness !== null" class="pill-pct">{{ localBrightness }}%</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  state: { type: Object, required: true },
  hass:  { type: Object, default: null },
})

const pillRef = ref(null)

const isOn          = computed(() => props.state.state === 'on')
const isUnavailable = computed(() => ['unavailable', 'unknown'].includes(props.state.state))

const name = computed(
  () => props.state.attributes.friendly_name
    ?? props.state.entity_id.split('.')[1].replace(/_/g, ' '),
)

const haBrightness = computed(() => {
  if (!isOn.value || props.state.attributes.brightness == null) return null
  return Math.round((props.state.attributes.brightness / 255) * 100)
})

const localBrightness = ref(haBrightness.value)
watch(haBrightness, (v) => { if (!isDragging) localBrightness.value = v })

const supportsBrightness = computed(() => {
  const modes = props.state.attributes.supported_color_modes
  if (modes?.length) return !modes.every((m) => m === 'onoff')
  return (props.state.attributes.supported_features & 1) > 0
})

const fillPct = computed(() => (isOn.value ? (localBrightness.value ?? 100) : 0))

// Card gets a very faint ambient glow scaled to brightness
const pillStyle = computed(() => {
  if (!isOn.value) return {}
  const b = (fillPct.value / 100)
  return {
    boxShadow: `0 0 ${12 + b * 18}px rgba(255, 220, 120, ${0.04 + b * 0.07})`,
    borderColor: `rgba(255, 220, 120, ${0.1 + b * 0.15})`,
  }
})

const pillClass = computed(() => ({
  'pill--on': isOn.value,
  'pill--unavailable': isUnavailable.value,
}))

const fillStyle = computed(() => ({ height: fillPct.value + '%' }))
const thumbStyle = computed(() => ({ bottom: fillPct.value + '%' }))

// ── Pointer handling ─────────────────────────────────────────────────────────
let startY     = null
let isDragging = false
let dimTimer   = null

function onPointerDown(e) {
  if (isUnavailable.value) return
  pillRef.value?.setPointerCapture(e.pointerId)
  startY     = e.clientY
  isDragging = false
}

function onPointerMove(e) {
  if (startY === null) return
  if (Math.abs(e.clientY - startY) > 6) isDragging = true
  if (!isDragging || !supportsBrightness.value) return

  const rect = pillRef.value.getBoundingClientRect()
  const pct  = Math.round(Math.max(1, Math.min(100,
    100 - ((e.clientY - rect.top) / rect.height) * 100,
  )))
  localBrightness.value = pct
  clearTimeout(dimTimer)
  dimTimer = setTimeout(() => setBrightness(pct), 80)
}

function onPointerUp() {
  if (!isDragging) toggle()
  else { clearTimeout(dimTimer); setBrightness(localBrightness.value) }
  startY = null; isDragging = false
}

function cancelDrag() { startY = null; isDragging = false }

function toggle() {
  if (isUnavailable.value || !props.hass) return
  props.hass.callService('light', 'toggle', { entity_id: props.state.entity_id })
}

function setBrightness(pct) {
  props.hass?.callService('light', 'turn_on', {
    entity_id: props.state.entity_id,
    brightness: Math.round((pct / 100) * 255),
  })
}
</script>

<style scoped>
.pill {
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  background: #10131c;
  border: 1px solid #1e2333;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  aspect-ratio: 1 / 2;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.pill--unavailable { opacity: 0.25; pointer-events: none; }

/* Warm fill — luminous, not painted */
.pill-fill {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 0 0 0.9rem 0.9rem;
  background: linear-gradient(
    to top,
    rgba(180, 100, 10, 0.0)  0%,
    rgba(220, 140, 20, 0.12) 50%,
    rgba(255, 210, 80, 0.26) 85%,
    rgba(255, 230, 120, 0.32) 100%
  );
  transition: height 60ms linear;
  will-change: height;
}

/* Glowing crest line at the fill boundary */
.pill-thumb {
  position: absolute;
  left: 8%;
  right: 8%;
  height: 1px;
  background: rgba(255, 245, 210, 0.85);
  border-radius: 1px;
  box-shadow: 0 0 6px 1px rgba(255, 220, 100, 0.5);
  transform: translateY(1px);
  transition: bottom 60ms linear;
  will-change: bottom;
  pointer-events: none;
}

/* Label layer */
.pill-label {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.65rem 0.6rem;
  pointer-events: none;
}

.pill-name {
  font-size: 0.75rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.3;
  letter-spacing: 0.01em;
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.9);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.pill--on .pill-name { color: #fff; }

.pill-pct {
  font-size: 0.65rem;
  font-weight: 400;
  color: rgba(255, 220, 120, 0.6);
  text-shadow: 0 1px 4px rgba(0,0,0,0.8);
  align-self: flex-end;
  font-variant-numeric: tabular-nums;
}
</style>
