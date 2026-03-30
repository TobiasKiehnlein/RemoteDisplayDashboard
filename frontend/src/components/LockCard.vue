<template>
  <div
    class="lock-pill"
    :class="`lock-pill--${state.state}`"
    :style="pillStyle"
  >
    <div class="lock-fill" :style="fillStyle" />

    <div class="lock-info">
      <span class="lock-name">{{ friendlyName }}</span>
      <svg class="lock-icon" viewBox="0 0 24 24" fill="currentColor">
        <path v-if="isLocked" d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
        <path v-else d="M12 1C9.24 1 7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2h-1V6c0-2.76-2.24-5-5-5zm0 2c1.71 0 3.1 1.39 3.1 3.1V8H8.9V6.1C8.9 4.39 10.29 3 12 3zm0 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" opacity=".4"/>
      </svg>
      <span class="lock-state">{{ stateLabel }}</span>
    </div>

    <div class="lock-controls" @click.stop @pointerdown.stop>
      <!-- When locked: open latch + unlock -->
      <template v-if="isLocked">
        <button class="ctrl ctrl--main" @click="callService('open')" title="Open latch">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
        </button>
        <button class="ctrl" @click="callService('unlock')" title="Unlock">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h2c0-1.66 1.34-3 3-3s3 1.34 3 3v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/></svg>
        </button>
      </template>
      <!-- When unlocked: lock + open latch -->
      <template v-else-if="isUnlocked">
        <button class="ctrl ctrl--main ctrl--lock" @click="callService('lock')" title="Lock">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>
        </button>
        <button class="ctrl" @click="callService('open')" title="Open latch">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
        </button>
      </template>
      <!-- Transitioning -->
      <template v-else>
        <span class="lock-transitioning">…</span>
      </template>
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

const isLocked   = computed(() => props.state.state === 'locked')
const isUnlocked = computed(() => props.state.state === 'unlocked')

const stateLabel = computed(() => ({
  locked: 'Locked', unlocked: 'Unlocked', locking: 'Locking…', unlocking: 'Unlocking…',
}[props.state.state] ?? props.state.state))

// Fill: amber warning when unlocked
const fillPct = computed(() => isUnlocked.value ? 60 : 0)

const fillStyle = computed(() => ({ height: fillPct.value + '%' }))

const pillStyle = computed(() => {
  if (isUnlocked.value) return {
    borderColor: 'rgba(245, 158, 11, 0.4)',
    boxShadow: '0 0 18px rgba(245, 158, 11, 0.12)',
  }
  if (isLocked.value) return {
    borderColor: 'rgba(16, 185, 129, 0.2)',
  }
  return {}
})

function callService(action) {
  props.hass?.callService('lock', action, { entity_id: props.state.entity_id })
}
</script>

<style scoped>
.lock-pill {
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

.lock-fill {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  border-radius: 0 0 0.9rem 0.9rem;
  background: linear-gradient(
    to top,
    rgba(120, 53, 15, 0.0)  0%,
    rgba(180, 83, 9,  0.14) 50%,
    rgba(245, 158, 11, 0.26) 85%,
    rgba(252, 211, 77, 0.32) 100%
  );
  transition: height 0.4s ease;
}

.lock-info {
  position: absolute;
  top: 0; left: 0; right: 0;
  padding: 0.65rem 0.6rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  pointer-events: none;
}

.lock-name {
  font-size: 0.75rem;
  font-weight: 600;
  color: #fff;
  text-shadow: 0 1px 6px rgba(0,0,0,0.9);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-align: center;
  width: 100%;
}

.lock-icon {
  width: 2rem;
  height: 2rem;
  margin-top: 0.4rem;
  color: rgba(255,255,255,0.15);
  transition: color 0.3s;
}
.lock-pill--locked   .lock-icon { color: rgba(52, 211, 153, 0.6); }
.lock-pill--unlocked .lock-icon { color: rgba(251, 191, 36, 0.7); }

.lock-state {
  font-size: 0.6rem;
  color: rgba(255,255,255,0.25);
}
.lock-pill--locked   .lock-state { color: rgba(52, 211, 153, 0.5); }
.lock-pill--unlocked .lock-state { color: rgba(251, 191, 36, 0.6); }

.lock-controls {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.4rem 0.3rem 0.55rem;
  background: linear-gradient(to top, rgba(12, 14, 24, 0.85), transparent);
}

.lock-transitioning {
  font-size: 0.75rem;
  color: rgba(255,255,255,0.3);
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

.ctrl--main {
  width: 34px;
  height: 34px;
  background: rgba(16, 185, 129, 0.2);
  color: rgba(167, 243, 208, 0.9);
  padding: 7px;
}
.ctrl--main:hover { background: rgba(16, 185, 129, 0.4) !important; color: #fff; }

.ctrl--lock {
  background: rgba(245, 158, 11, 0.2);
  color: rgba(252, 211, 77, 0.9);
}
.ctrl--lock:hover { background: rgba(245, 158, 11, 0.4) !important; }
</style>
