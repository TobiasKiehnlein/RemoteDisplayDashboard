<template>
  <div class="presence-pill" :class="{ 'presence-pill--home': isHome }">
    <div v-if="isHome" class="presence-fill" />
    <div v-if="isHome" class="presence-crest" />
    <div class="presence-info">
      <span class="presence-name">{{ friendlyName }}</span>
      <span class="presence-initial">{{ initial }}</span>
      <span class="presence-state">{{ isHome ? 'Home' : 'Away' }}</span>
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

const isHome  = computed(() => props.state.state === 'home')
const initial = computed(() => (friendlyName.value[0] ?? '?').toUpperCase())
</script>

<style scoped>
.presence-pill {
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

.presence-pill--home {
  border-color: rgba(16, 185, 129, 0.25);
  box-shadow: 0 0 14px rgba(16, 185, 129, 0.1);
}

.presence-fill {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 50%;
  border-radius: 0 0 0.9rem 0.9rem;
  background: linear-gradient(
    to top,
    rgba(2, 44, 34,   0.0)   0%,
    rgba(5, 150, 105, 0.1)   50%,
    rgba(16, 185, 129, 0.2)  85%,
    rgba(52, 211, 153, 0.26) 100%
  );
}

.presence-crest {
  position: absolute;
  bottom: 50%;
  left: 8%; right: 8%;
  height: 1px;
  background: rgba(167, 243, 208, 0.6);
  border-radius: 1px;
  box-shadow: 0 0 4px 1px rgba(52, 211, 153, 0.4);
  transform: translateY(1px);
  pointer-events: none;
}

.presence-info {
  position: absolute;
  inset: 0;
  padding: 0.65rem 0.6rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  pointer-events: none;
}

.presence-name {
  font-size: 0.75rem;
  font-weight: 600;
  color: #fff;
  text-shadow: 0 1px 6px rgba(0,0,0,0.9);
  text-align: center;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.presence-initial {
  font-size: 2.2rem;
  font-weight: 700;
  color: rgba(255,255,255,0.07);
  line-height: 1;
  margin-top: 0.5rem;
}
.presence-pill--home .presence-initial { color: rgba(52, 211, 153, 0.18); }

.presence-state {
  font-size: 0.65rem;
  color: rgba(255,255,255,0.2);
  margin-top: auto;
  margin-bottom: 1.2rem;
}
.presence-pill--home .presence-state { color: rgba(167, 243, 208, 0.7); }
</style>
