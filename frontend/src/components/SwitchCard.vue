<template>
  <div
    class="switch-pill"
    :class="{ 'switch-pill--on': isOn }"
    :style="pillStyle"
    @click="toggle"
  >
    <div v-if="isOn" class="switch-fill" />
    <div v-if="isOn" class="switch-crest" />
    <div class="switch-info">
      <span class="switch-name">{{ friendlyName }}</span>
      <span class="switch-state">{{ isOn ? 'On' : 'Off' }}</span>
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

const isOn = computed(() => props.state.state === 'on')

const pillStyle = computed(() => {
  if (!isOn.value) return {}
  return {
    boxShadow: '0 0 18px rgba(16, 185, 129, 0.12)',
    borderColor: 'rgba(16, 185, 129, 0.25)',
  }
})

function toggle() {
  props.hass?.callService('switch', 'toggle', { entity_id: props.state.entity_id })
}
</script>

<style scoped>
.switch-pill {
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

.switch-fill {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 70%;
  border-radius: 0 0 0.9rem 0.9rem;
  background: linear-gradient(
    to top,
    rgba(2, 44, 34, 0.0)     0%,
    rgba(5, 150, 105, 0.14)  50%,
    rgba(16, 185, 129, 0.28) 85%,
    rgba(52, 211, 153, 0.34) 100%
  );
}

.switch-crest {
  position: absolute;
  bottom: 70%;
  left: 8%; right: 8%;
  height: 1px;
  background: rgba(167, 243, 208, 0.8);
  border-radius: 1px;
  box-shadow: 0 0 6px 1px rgba(52, 211, 153, 0.5);
  transform: translateY(1px);
  pointer-events: none;
}

.switch-info {
  position: absolute;
  top: 0; left: 0; right: 0;
  padding: 0.65rem 0.6rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  pointer-events: none;
}

.switch-name {
  font-size: 0.75rem;
  font-weight: 600;
  color: #fff;
  text-shadow: 0 1px 6px rgba(0,0,0,0.9);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.switch-state {
  font-size: 0.65rem;
  color: rgba(255,255,255,0.25);
}
.switch-pill--on .switch-state { color: rgba(167, 243, 208, 0.7); }
</style>
