<template>
  <div class="controls-view">
    <div v-if="!hass" class="empty">Connecting…</div>

    <template v-else>
      <!-- Presence row -->
      <div v-if="visiblePersons.length" class="presence-row">
        <div
          v-for="person in visiblePersons"
          :key="person.entity_id"
          class="presence-chip"
          :class="{ 'presence-chip--home': person.state === 'home' }"
        >
          <span class="presence-dot" />
          <span class="presence-name">{{ person.attributes.friendly_name ?? person.entity_id.split('.')[1] }}</span>
          <span class="presence-state">{{ person.state === 'home' ? 'Home' : 'Away' }}</span>
        </div>
      </div>

      <!-- Climate -->
      <section v-if="visibleClimate.length" class="section">
        <div class="section-label">Climate</div>
        <div class="card-grid">
          <ClimateCard
            v-for="e in visibleClimate"
            :key="e.entity_id"
            :state="e"
            :hass="hass"
          />
        </div>
      </section>

      <!-- Locks + Vacuums -->
      <section v-if="visibleLocks.length || visibleVacuums.length" class="section">
        <div class="section-label">Devices</div>
        <div class="card-grid">
          <LockCard
            v-for="e in visibleLocks"
            :key="e.entity_id"
            :state="e"
            :hass="hass"
          />
          <VacuumCard
            v-for="e in visibleVacuums"
            :key="e.entity_id"
            :state="e"
            :hass="hass"
          />
        </div>
      </section>

      <!-- Switches -->
      <section v-if="visibleSwitches.length" class="section">
        <div class="section-label">Switches</div>
        <div class="card-grid">
          <SwitchCard
            v-for="e in visibleSwitches"
            :key="e.entity_id"
            :state="e"
            :hass="hass"
          />
        </div>
      </section>

      <div v-if="!visiblePersons.length && !visibleClimate.length && !visibleLocks.length && !visibleVacuums.length && !visibleSwitches.length" class="empty">
        All devices hidden
      </div>
    </template>
  </div>
</template>

<script setup>
import { computed, inject } from 'vue'
import ClimateCard from '../components/ClimateCard.vue'
import LockCard    from '../components/LockCard.vue'
import VacuumCard  from '../components/VacuumCard.vue'
import SwitchCard  from '../components/SwitchCard.vue'
import { useControls } from '../composables/useControls.js'
import { useSettings } from '../composables/useSettings.js'

const hass = inject('hass')
const { switches, climate, locks, vacuums, persons } = useControls(hass)
const { isVisible, sortedByOrder } = useSettings()

const visiblePersons  = computed(() => sortedByOrder(persons.value.filter((e)  => isVisible(e.entity_id))))
const visibleClimate  = computed(() => sortedByOrder(climate.value.filter((e)  => isVisible(e.entity_id))))
const visibleLocks    = computed(() => sortedByOrder(locks.value.filter((e)    => isVisible(e.entity_id))))
const visibleVacuums  = computed(() => sortedByOrder(vacuums.value.filter((e)  => isVisible(e.entity_id))))
const visibleSwitches = computed(() => sortedByOrder(switches.value.filter((e) => isVisible(e.entity_id))))
</script>

<style scoped>
.controls-view {
  padding: 0.75rem 0.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.presence-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  padding: 0 0.25rem;
}

.presence-chip {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.3rem 0.6rem;
  border-radius: 2rem;
  background: #0c0e18;
  border: 1px solid #1a1e33;
}

.presence-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #374151;
  flex-shrink: 0;
}
.presence-chip--home .presence-dot { background: #10b981; box-shadow: 0 0 6px rgba(16, 185, 129, 0.6); }

.presence-name {
  font-size: 0.7rem;
  font-weight: 600;
  color: #d1d5db;
}

.presence-state {
  font-size: 0.6rem;
  color: #4b5563;
}
.presence-chip--home .presence-state { color: rgba(52, 211, 153, 0.6); }

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
