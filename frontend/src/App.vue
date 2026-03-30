<template>
  <div class="app">
    <div class="scroll-area">
      <!-- Auto mode -->
      <template v-if="!customTabsEnabled">
        <LightsView   v-show="activeTab === 'lights'" />
        <MediaView    v-show="activeTab === 'media'" />
        <ClimateView  v-show="activeTab === 'climate'" />
        <SwitchesView v-show="activeTab === 'switches'" />
        <DevicesView  v-show="activeTab === 'devices'" />
        <PresenceView v-show="activeTab === 'presence'" />
      </template>

      <!-- Custom tabs mode -->
      <template v-else>
        <CustomTabView
          v-for="tab in customTabs"
          :key="tab.id"
          v-show="activeTab === tab.id"
          :tab="tab"
        />
        <div v-if="!customTabs.length" class="empty-state">
          No tabs configured — tap <strong>Settings</strong> to add some.
        </div>
      </template>
    </div>

    <!-- Tab bar -->
    <nav class="tabbar">
      <!-- Auto mode tabs -->
      <template v-if="!customTabsEnabled">
        <button class="tab" :class="{ 'tab--lights': activeTab === 'lights' }" @click="activeTab = 'lights'">
          <svg class="tab-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a7 7 0 0 1 7 7c0 2.6-1.4 4.9-3.5 6.2V17a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1.8A7 7 0 0 1 5 9a7 7 0 0 1 7-7zm2.5 17h-5v1.5A1.5 1.5 0 0 0 11 22h2a1.5 1.5 0 0 0 1.5-1.5V19z"/></svg>
          <span class="tab-label">Lights</span>
        </button>
        <button class="tab" :class="{ 'tab--media': activeTab === 'media' }" @click="activeTab = 'media'">
          <svg class="tab-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z"/></svg>
          <span class="tab-label">Media</span>
        </button>
        <button v-if="hasClimate" class="tab" :class="{ 'tab--climate': activeTab === 'climate' }" @click="activeTab = 'climate'">
          <svg class="tab-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M13 11.1V7h-2v4.1c-1.16.41-2 1.51-2 2.82 0 1.65 1.35 3.08 3 3.08s3-1.43 3-3.08c0-1.31-.84-2.41-2-2.82zM12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"/></svg>
          <span class="tab-label">Climate</span>
        </button>
        <button v-if="hasSwitches" class="tab" :class="{ 'tab--switches': activeTab === 'switches' }" @click="activeTab = 'switches'">
          <svg class="tab-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M17 7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h10c2.76 0 5-2.24 5-5s-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/></svg>
          <span class="tab-label">Switches</span>
        </button>
        <button v-if="hasDevices" class="tab" :class="{ 'tab--devices': activeTab === 'devices' }" @click="activeTab = 'devices'">
          <svg class="tab-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>
          <span class="tab-label">Devices</span>
        </button>
        <button v-if="hasPresence" class="tab" :class="{ 'tab--presence': activeTab === 'presence' }" @click="activeTab = 'presence'">
          <svg class="tab-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
          <span class="tab-label">People</span>
        </button>
      </template>

      <!-- Custom tabs -->
      <template v-else>
        <button
          v-for="tab in customTabs"
          :key="tab.id"
          class="tab"
          :style="activeTab === tab.id ? { color: tab.color } : {}"
          @click="activeTab = tab.id"
        >
          <svg class="tab-icon" viewBox="0 0 24 24" fill="currentColor">
            <path :d="ICONS[tab.icon] ?? ICONS.bulb" />
          </svg>
          <span class="tab-label">{{ tab.name }}</span>
        </button>
      </template>

      <!-- Settings always shown -->
      <button class="tab tab--settings" @click="settingsOpen = true">
        <svg class="tab-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M19.14 12.94c.04-.3.06-.61.06-.94s-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96a6.97 6.97 0 0 0-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.477.477 0 0 0-.59.22L2.74 8.87a.47.47 0 0 0 .12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.37 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.57 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.47.47 0 0 0-.12-.61l-2.01-1.58zM12 15.6a3.6 3.6 0 1 1 0-7.2 3.6 3.6 0 0 1 0 7.2z"/></svg>
        <span class="tab-label">Settings</span>
      </button>
    </nav>

    <SettingsSheet :open="settingsOpen" @close="settingsOpen = false" />
  </div>
</template>

<script setup>
import { ref, inject, watch } from 'vue'
import LightsView    from './views/LightsView.vue'
import MediaView     from './views/MediaView.vue'
import ClimateView   from './views/ClimateView.vue'
import SwitchesView  from './views/SwitchesView.vue'
import DevicesView   from './views/DevicesView.vue'
import PresenceView  from './views/PresenceView.vue'
import CustomTabView from './components/CustomTabView.vue'
import SettingsSheet from './components/SettingsSheet.vue'
import { useControls }    from './composables/useControls.js'
import { useCustomTabs }  from './composables/useCustomTabs.js'
import { ICONS }          from './lib/icons.js'

const hass = inject('hass')
const { hasClimate, hasSwitches, hasDevices, hasPresence } = useControls(hass)
const { customTabs, customTabsEnabled } = useCustomTabs()

const activeTab    = ref('lights')
const settingsOpen = ref(false)

// Keep activeTab valid when switching modes or when tabs list changes
watch(customTabsEnabled, (enabled) => {
  activeTab.value = enabled ? (customTabs.value[0]?.id ?? 'lights') : 'lights'
})
watch(customTabs, (tabs) => {
  if (customTabsEnabled.value && !tabs.find((t) => t.id === activeTab.value)) {
    activeTab.value = tabs[0]?.id ?? ''
  }
})
</script>

<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html, body {
  background: #000; color: #f3f4f6;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  height: 100%; -webkit-text-size-adjust: 100%;
}
#app { height: 100%; }
</style>

<style scoped>
.app { display: flex; flex-direction: column; height: 100vh; background: #000; }
.scroll-area { flex: 1; overflow-y: auto; overflow-x: hidden; padding-bottom: 1rem; }

.empty-state {
  padding: 3rem 1.5rem; text-align: center;
  color: #374151; font-size: .85rem; line-height: 1.6;
}

.tabbar {
  flex-shrink: 0; display: flex;
  overflow-x: auto; scrollbar-width: none;
  background: #0a0c14; border-top: 1px solid #1a1e2e;
  padding: .35rem 0 calc(.35rem + env(safe-area-inset-bottom));
}
.tabbar::-webkit-scrollbar { display: none; }

.tab {
  flex: 1; min-width: 3rem;
  display: flex; flex-direction: column; align-items: center; gap: .2rem;
  padding: .4rem .25rem;
  background: none; border: none; cursor: pointer;
  color: #4b5563; transition: color .15s;
  -webkit-tap-highlight-color: transparent; white-space: nowrap;
}
.tab-icon { width: 1.2rem; height: 1.2rem; flex-shrink: 0; }
.tab-label { font-size: .55rem; font-weight: 600; text-transform: uppercase; letter-spacing: .06em; }

@media (max-width: 360px) { .tab-label { display: none; } }

.tab--lights   { color: #f59e0b; }
.tab--media    { color: #818cf8; }
.tab--climate  { color: #f97316; }
.tab--switches { color: #10b981; }
.tab--devices  { color: #0ea5e9; }
.tab--presence { color: #a78bfa; }
.tab--settings { color: #374151; }
.tab--settings:hover { color: #6b7280; }
</style>
