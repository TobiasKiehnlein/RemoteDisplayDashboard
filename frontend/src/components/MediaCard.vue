<template>
  <div
    ref="pillRef"
    class="media-pill"
    :class="pillClass"
    :style="pillStyle"
    @pointerdown="onPointerDown"
    @pointermove="onPointerMove"
    @pointerup="onPointerUp"
    @pointercancel="cancelDrag"
  >
    <!-- Volume fill rising from bottom -->
    <div v-if="isActive" class="media-fill" :style="fillStyle" />
    <div v-if="isActive && hasVolume" class="media-crest" :style="crestStyle" />

    <!-- Info overlay -->
    <div class="media-info">
      <span class="media-name">{{ friendlyName }}</span>
      <template v-if="isPlaying">
        <span class="media-track">{{ trackTitle }}</span>
        <span v-if="artist" class="media-artist">{{ artist }}</span>
      </template>
      <span v-else class="media-state">{{ stateLabel }}</span>
    </div>

    <!-- Volume % -->
    <span v-if="isActive && hasVolume" class="media-vol">{{ volumePct }}%</span>

    <!-- Controls — stop propagation so they don't trigger drag -->
    <div class="media-controls" @pointerdown.stop @pointermove.stop>
      <button class="ctrl" @click="volumeDown" :disabled="!hasVolume">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.5 12A4.5 4.5 0 0 0 16 7.97V16c1.48-.73 2.5-2.25 2.5-4zM5 9v6h4l5 5V4L9 9H5z"/></svg>
      </button>
      <button class="ctrl ctrl--main" @click="playPause">
        <svg v-if="isPlaying" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6zm8-14v14h4V5z"/></svg>
        <svg v-else viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
      </button>
      <button class="ctrl" @click="volumeUp" :disabled="!hasVolume">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97V16c1.48-.73 2.5-2.25 2.5-4zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77 0-4.28-2.99-7.86-7-8.77z"/></svg>
      </button>
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

const friendlyName = computed(
  () => props.state.attributes.friendly_name
    ?? props.state.entity_id.split('.')[1].replace(/_/g, ' '),
)

const isPlaying = computed(() => props.state.state === 'playing')
const isActive  = computed(() => ['playing', 'paused', 'on', 'buffering'].includes(props.state.state))

const stateLabel = computed(() => {
  const map = { idle: 'Idle', off: 'Off', paused: 'Paused', buffering: 'Buffering…', on: 'On' }
  return map[props.state.state] ?? props.state.state
})

const trackTitle = computed(() => props.state.attributes.media_title ?? '')
const artist     = computed(() => props.state.attributes.media_artist ?? '')

// Volume — HA stores as 0–1
const haVolume = computed(() => props.state.attributes.volume_level ?? null)
const hasVolume = computed(() => haVolume.value !== null)

const volumePct = computed(() =>
  haVolume.value !== null ? Math.round(haVolume.value * 100) : null,
)

const localVolume = ref(volumePct.value)
watch(volumePct, (v) => { if (!isDragging) localVolume.value = v })

const fillPct = computed(() => (isActive.value ? (localVolume.value ?? 80) : 0))


// Indigo/blue ambient glow scaled to volume
const pillStyle = computed(() => {
  if (!isActive.value) return {}
  const b = (fillPct.value / 100)
  return {
    boxShadow: `0 0 ${12 + b * 18}px rgba(99, 102, 241, ${0.05 + b * 0.1})`,
    borderColor: `rgba(99, 102, 241, ${0.12 + b * 0.2})`,
  }
})

const pillClass = computed(() => ({
  'media-pill--active': isActive.value,
  'media-pill--playing': isPlaying.value,
}))

const fillStyle  = computed(() => ({ height: fillPct.value + '%' }))
const crestStyle = computed(() => ({ bottom: fillPct.value + '%' }))

// ── Pointer / drag (volume) ──────────────────────────────────────────────────
let startY     = null
let isDragging = false
let volTimer   = null

function onPointerDown(e) {
  if (!hasVolume.value) return
  pillRef.value?.setPointerCapture(e.pointerId)
  startY     = e.clientY
  isDragging = false
}

function onPointerMove(e) {
  if (startY === null) return
  if (Math.abs(e.clientY - startY) > 6) isDragging = true
  if (!isDragging) return
  const rect = pillRef.value.getBoundingClientRect()
  const pct  = Math.round(Math.max(0, Math.min(100,
    100 - ((e.clientY - rect.top) / rect.height) * 100,
  )))
  localVolume.value = pct
  clearTimeout(volTimer)
  volTimer = setTimeout(() => setVolume(pct), 80)
}

function onPointerUp() {
  if (!isDragging && !hasVolume.value) playPause()
  else if (isDragging) { clearTimeout(volTimer); setVolume(localVolume.value) }
  startY = null; isDragging = false
}

function cancelDrag() { startY = null; isDragging = false }

// ── Services ─────────────────────────────────────────────────────────────────
function playPause() {
  props.hass?.callService('media_player', 'media_play_pause', { entity_id: props.state.entity_id })
}

function volumeDown() {
  props.hass?.callService('media_player', 'volume_down', { entity_id: props.state.entity_id })
}

function volumeUp() {
  props.hass?.callService('media_player', 'volume_up', { entity_id: props.state.entity_id })
}

function setVolume(pct) {
  props.hass?.callService('media_player', 'volume_set', {
    entity_id: props.state.entity_id,
    volume_level: pct / 100,
  })
}
</script>

<style scoped>
.media-pill {
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  background: #0c0e18;
  border: 1px solid #1a1e33;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  aspect-ratio: 1 / 2;
  display: flex;
  flex-direction: column;
  transition: border-color 0.3s, box-shadow 0.3s;
}

/* Blue-indigo fill */
.media-fill {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 0 0 0.9rem 0.9rem;
  background: linear-gradient(
    to top,
    rgba(30, 27, 75, 0.0)   0%,
    rgba(67, 56, 202, 0.14) 50%,
    rgba(99, 102, 241, 0.28) 85%,
    rgba(129, 140, 248, 0.34) 100%
  );
  transition: height 60ms linear;
  will-change: height;
}

/* Cool crest line */
.media-crest {
  position: absolute;
  left: 8%;
  right: 8%;
  height: 1px;
  background: rgba(199, 210, 254, 0.8);
  border-radius: 1px;
  box-shadow: 0 0 6px 1px rgba(129, 140, 248, 0.5);
  transform: translateY(1px);
  transition: bottom 60ms linear;
  will-change: bottom;
  pointer-events: none;
}

/* Text info block */
.media-info {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0.65rem 0.6rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  pointer-events: none;
}

.media-name {
  font-size: 0.75rem;
  font-weight: 600;
  color: #fff;
  text-shadow: 0 1px 6px rgba(0,0,0,0.9);
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.media-track {
  font-size: 0.65rem;
  font-weight: 500;
  color: rgba(199, 210, 254, 0.9);
  text-shadow: 0 1px 4px rgba(0,0,0,0.8);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.media-artist {
  font-size: 0.6rem;
  color: rgba(255,255,255,0.4);
  text-shadow: 0 1px 3px rgba(0,0,0,0.9);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.media-state {
  font-size: 0.65rem;
  color: rgba(255,255,255,0.25);
}

/* Volume % */
.media-vol {
  position: absolute;
  bottom: 2.4rem;
  right: 0.55rem;
  font-size: 0.65rem;
  color: rgba(129, 140, 248, 0.65);
  font-variant-numeric: tabular-nums;
  pointer-events: none;
  text-shadow: 0 1px 4px rgba(0,0,0,0.8);
}

/* Transport controls */
.media-controls {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
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
  background: rgba(99, 102, 241, 0.25);
  color: rgba(199, 210, 254, 0.9);
  padding: 7px;
}

.media-pill--playing .ctrl--main {
  background: rgba(99, 102, 241, 0.4);
  color: #fff;
}

.ctrl--main:hover {
  background: rgba(99, 102, 241, 0.55) !important;
  color: #fff;
}
</style>
