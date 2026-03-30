<template>
  <Transition name="sheet">
    <div v-if="open" class="sheet-backdrop" @click.self="handleClose">
      <div class="sheet">

        <!-- ── Header ─────────────────────────────────────────────────────── -->
        <div class="sheet-header">
          <button v-if="view !== 'main'" class="hdr-btn" @click="goBack">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
            </svg>
          </button>
          <span class="sheet-title">{{ headerTitle }}</span>
          <button v-if="view === 'main'" class="hdr-btn" @click="handleClose">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>
          <div v-else style="width:26px" />
        </div>

        <!-- ── View: MAIN ─────────────────────────────────────────────────── -->
        <div v-if="view === 'main'" class="sheet-body" :class="{ 'sheet-body--dragging': entityDrag !== null || tabDrag !== null }">

          <!-- Custom tabs mode toggle -->
          <div class="option-row" @click="customTabsEnabled = !customTabsEnabled">
            <span class="option-label">Custom Tabs</span>
            <span class="toggle" :class="{ 'toggle--on': customTabsEnabled }"><span class="toggle-thumb"/></span>
          </div>

          <!-- ── Custom tabs mode ── -->
          <template v-if="customTabsEnabled">
            <div class="divider" />
            <div class="section-row">
              <span class="section-label">Tabs</span>
              <button class="add-btn" @click="createAndEditTab">
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
                Add Tab
              </button>
            </div>

            <div
              v-for="(tab, i) in customTabs"
              :key="tab.id"
              class="entity-row"
              :ref="(el) => { if (el) tabRowRefs[i] = el }"
              :class="{ 'entity-row--dragging': tabDrag?.index === i }"
            >
              <div class="drag-handle" @pointerdown.stop="startTabDrag($event, i)" @pointermove="moveTabDrag" @pointerup="endTabDrag" @pointercancel="endTabDrag">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="9" cy="7" r="1.5"/><circle cx="15" cy="7" r="1.5"/>
                  <circle cx="9" cy="12" r="1.5"/><circle cx="15" cy="12" r="1.5"/>
                  <circle cx="9" cy="17" r="1.5"/><circle cx="15" cy="17" r="1.5"/>
                </svg>
              </div>
              <svg viewBox="0 0 24 24" fill="currentColor" class="tab-icon-sm" :style="{ color: tab.color }">
                <path :d="ICONS[tab.icon] ?? ICONS.bulb" />
              </svg>
              <span class="entity-name">{{ tab.name }}</span>
              <button class="icon-btn" @click.stop="openTabEditor(tab.id)">
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
              </button>
              <button class="icon-btn icon-btn--danger" @click.stop="removeTab(tab.id)">
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
              </button>
            </div>

            <div v-if="!customTabs.length" class="hint">No tabs yet — tap Add Tab to create one.</div>
          </template>

          <!-- ── Auto mode ── -->
          <template v-else>
            <div class="divider" />
            <div class="option-row" @click="toggleGroupByRoom">
              <span class="option-label">Group lights by room</span>
              <span class="toggle" :class="{ 'toggle--on': groupByRoom }"><span class="toggle-thumb"/></span>
            </div>
            <div class="divider" />

            <!-- Lights -->
            <template v-if="orderedLights.length">
              <div class="section-label pl">Lights</div>
              <div
                v-for="(light, i) in orderedLights"
                :key="light.entity_id"
                class="entity-row"
                :ref="(el) => { if (el) lightRowRefs[i] = el }"
                :class="{ 'entity-row--dragging': entityDrag?.type === 'lights' && entityDrag?.index === i }"
              >
                <div class="drag-handle" @pointerdown.stop="startEntityDrag($event, 'lights', i)" @pointermove="moveEntityDrag" @pointerup="endEntityDrag" @pointercancel="endEntityDrag">
                  <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="9" cy="7" r="1.5"/><circle cx="15" cy="7" r="1.5"/><circle cx="9" cy="12" r="1.5"/><circle cx="15" cy="12" r="1.5"/><circle cx="9" cy="17" r="1.5"/><circle cx="15" cy="17" r="1.5"/></svg>
                </div>
                <span class="entity-name">
                  {{ light.attributes.friendly_name ?? light.entity_id }}
                  <span v-if="light.roomName" class="entity-sub">{{ light.roomName }}</span>
                </span>
                <span class="toggle" :class="{ 'toggle--on': isVisible(light.entity_id) }" @click.stop="toggle(light.entity_id)"><span class="toggle-thumb"/></span>
              </div>
            </template>

            <!-- Media -->
            <template v-if="orderedMedia.length">
              <div class="section-label pl" style="margin-top:.5rem">Media</div>
              <div
                v-for="(player, i) in orderedMedia"
                :key="player.entity_id"
                class="entity-row"
                :ref="(el) => { if (el) mediaRowRefs[i] = el }"
                :class="{ 'entity-row--dragging': entityDrag?.type === 'media' && entityDrag?.index === i }"
              >
                <div class="drag-handle" @pointerdown.stop="startEntityDrag($event, 'media', i)" @pointermove="moveEntityDrag" @pointerup="endEntityDrag" @pointercancel="endEntityDrag">
                  <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="9" cy="7" r="1.5"/><circle cx="15" cy="7" r="1.5"/><circle cx="9" cy="12" r="1.5"/><circle cx="15" cy="12" r="1.5"/><circle cx="9" cy="17" r="1.5"/><circle cx="15" cy="17" r="1.5"/></svg>
                </div>
                <span class="entity-name">{{ player.attributes.friendly_name ?? player.entity_id }}</span>
                <span class="toggle" :class="{ 'toggle--on': isVisible(player.entity_id) }" @click.stop="toggle(player.entity_id)"><span class="toggle-thumb"/></span>
              </div>
            </template>

            <!-- Controls -->
            <template v-if="orderedControls.length">
              <div class="section-label pl" style="margin-top:.5rem">Other</div>
              <div
                v-for="(entity, i) in orderedControls"
                :key="entity.entity_id"
                class="entity-row"
                :ref="(el) => { if (el) controlRowRefs[i] = el }"
                :class="{ 'entity-row--dragging': entityDrag?.type === 'controls' && entityDrag?.index === i }"
              >
                <div class="drag-handle" @pointerdown.stop="startEntityDrag($event, 'controls', i)" @pointermove="moveEntityDrag" @pointerup="endEntityDrag" @pointercancel="endEntityDrag">
                  <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="9" cy="7" r="1.5"/><circle cx="15" cy="7" r="1.5"/><circle cx="9" cy="12" r="1.5"/><circle cx="15" cy="12" r="1.5"/><circle cx="9" cy="17" r="1.5"/><circle cx="15" cy="17" r="1.5"/></svg>
                </div>
                <span class="entity-name">
                  {{ entity.attributes.friendly_name ?? entity.entity_id }}
                  <span class="entity-sub">{{ entity.entity_id.split('.')[0] }}</span>
                </span>
                <span class="toggle" :class="{ 'toggle--on': isVisible(entity.entity_id) }" @click.stop="toggle(entity.entity_id)"><span class="toggle-thumb"/></span>
              </div>
            </template>
          </template>
        </div>

        <!-- ── View: TAB EDITOR ───────────────────────────────────────────── -->
        <div v-else-if="view === 'tab-editor' && editingTab" class="sheet-body" :class="{ 'sheet-body--dragging': itemDrag !== null }">

          <!-- Name -->
          <div class="field-label">Name</div>
          <div class="input-row">
            <input
              class="text-input"
              :value="editingTab.name"
              @input="updateTab(editingTabId, { name: $event.target.value })"
              placeholder="Tab name"
            />
          </div>

          <!-- Icon -->
          <div class="field-label" style="margin-top:.85rem">Icon</div>
          <div class="icon-grid">
            <button
              v-for="(path, key) in ICONS"
              :key="key"
              class="icon-option"
              :class="{ 'icon-option--active': editingTab.icon === key }"
              :style="editingTab.icon === key ? { color: editingTab.color } : {}"
              @click="updateTab(editingTabId, { icon: key })"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path :d="path"/></svg>
            </button>
          </div>

          <!-- Color -->
          <div class="field-label" style="margin-top:.85rem">Color</div>
          <div class="color-grid">
            <button
              v-for="c in COLORS"
              :key="c"
              class="color-swatch"
              :style="{ background: c }"
              :class="{ 'color-swatch--active': editingTab.color === c }"
              @click="updateTab(editingTabId, { color: c })"
            />
          </div>

          <!-- Items -->
          <div class="section-row" style="margin-top:1rem">
            <span class="field-label" style="margin:0">Items</span>
            <div style="display:flex;gap:.4rem">
              <button class="add-btn" @click="addSectionToCurrentTab">
                <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
                Section
              </button>
              <button class="add-btn" @click="openPicker(editingTabId, null)">
                <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
                Entities
              </button>
            </div>
          </div>

          <div v-if="!editingTab.items.length" class="hint">
            Add sections or entities above.
          </div>

          <template v-for="(item, i) in editingTab.items" :key="item.id ?? item.entityId">
            <!-- Section -->
            <template v-if="item.kind === 'section'">
              <div
                class="entity-row entity-row--section"
                :ref="(el) => { if (el) itemRowRefs[i] = el }"
                :class="{ 'entity-row--dragging': itemDrag?.index === i }"
              >
                <div class="drag-handle" @pointerdown.stop="startItemDrag($event, i)" @pointermove="moveItemDrag" @pointerup="endItemDrag" @pointercancel="endItemDrag">
                  <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="9" cy="7" r="1.5"/><circle cx="15" cy="7" r="1.5"/><circle cx="9" cy="12" r="1.5"/><circle cx="15" cy="12" r="1.5"/><circle cx="9" cy="17" r="1.5"/><circle cx="15" cy="17" r="1.5"/></svg>
                </div>
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" style="flex-shrink:0;color:#4b5563;margin-right:.3rem">
                  <path d="M20 6H4v2h16V6zm-2 5H6v2h12v-2zm2 5H4v2h16v-2z"/>
                </svg>
                <span class="entity-name" style="flex:1">
                  <input
                    class="inline-input"
                    :value="item.name"
                    @input="updateSection(editingTabId, item.id, { name: $event.target.value })"
                    @click.stop
                  />
                  <span class="entity-sub">{{ item.entityIds.length }} entities</span>
                </span>
                <button class="icon-btn" @click.stop="openPicker(editingTabId, item.id)" title="Add entities">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
                </button>
                <button class="icon-btn icon-btn--danger" @click.stop="removeSection(editingTabId, item.id)">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                </button>
              </div>
              <!-- Entities in section -->
              <div
                v-for="entityId in item.entityIds"
                :key="entityId"
                class="entity-row entity-row--nested"
              >
                <span class="entity-name">
                  {{ getEntityName(entityId) }}
                  <span class="entity-sub">{{ entityId }}</span>
                </span>
                <button class="icon-btn icon-btn--danger" @click="removeEntityFromSection(editingTabId, item.id, entityId)">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                </button>
              </div>
            </template>

            <!-- Top-level entity -->
            <div
              v-else
              class="entity-row"
              :ref="(el) => { if (el) itemRowRefs[i] = el }"
              :class="{ 'entity-row--dragging': itemDrag?.index === i }"
            >
              <div class="drag-handle" @pointerdown.stop="startItemDrag($event, i)" @pointermove="moveItemDrag" @pointerup="endItemDrag" @pointercancel="endItemDrag">
                <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="9" cy="7" r="1.5"/><circle cx="15" cy="7" r="1.5"/><circle cx="9" cy="12" r="1.5"/><circle cx="15" cy="12" r="1.5"/><circle cx="9" cy="17" r="1.5"/><circle cx="15" cy="17" r="1.5"/></svg>
              </div>
              <span class="entity-name">
                {{ getEntityName(item.entityId) }}
                <span class="entity-sub">{{ item.entityId.split('.')[0] }}</span>
              </span>
              <button class="icon-btn icon-btn--danger" @click="removeEntityFromTab(editingTabId, item.entityId)">
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
              </button>
            </div>
          </template>

          <!-- Delete tab -->
          <div class="divider" style="margin-top:1.5rem" />
          <button class="danger-btn" @click="deleteCurrentTab">
            <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
            Delete Tab
          </button>
        </div>

        <!-- ── View: ENTITY PICKER ─────────────────────────────────────────── -->
        <div v-else-if="view === 'entity-picker'" class="sheet-body picker-body">
          <div class="search-row">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" style="flex-shrink:0;color:#4b5563">
              <path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
            <input class="search-input" v-model="pickerSearch" placeholder="Search entities…" autofocus />
          </div>

          <div class="domain-chips">
            <button class="domain-chip" :class="{ 'domain-chip--on': pickerDomain === '' }" @click="pickerDomain = ''">All</button>
            <button
              v-for="d in availableDomains"
              :key="d"
              class="domain-chip"
              :class="{ 'domain-chip--on': pickerDomain === d }"
              @click="pickerDomain = d"
            >{{ d }}</button>
          </div>

          <div class="picker-count">{{ pickerSelected.size }} selected</div>

          <div
            v-for="entity in filteredEntities"
            :key="entity.entity_id"
            class="entity-row picker-row"
            @click="togglePickerEntity(entity.entity_id)"
          >
            <span class="check-box" :class="{ 'check-box--on': pickerSelected.has(entity.entity_id) }">
              <svg v-if="pickerSelected.has(entity.entity_id)" viewBox="0 0 24 24" fill="currentColor" width="12" height="12"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
            </span>
            <span class="entity-name">
              {{ entity.attributes.friendly_name ?? entity.entity_id }}
              <span class="entity-sub">{{ entity.entity_id }}</span>
            </span>
            <span class="domain-badge">{{ entity.entity_id.split('.')[0] }}</span>
          </div>
        </div>

      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, computed, watch, inject } from 'vue'
import { ICONS, COLORS }     from '../lib/icons.js'
import { useSettings }       from '../composables/useSettings.js'
import { useAreaLights }     from '../composables/useAreaLights.js'
import { useMediaPlayers }   from '../composables/useMediaPlayers.js'
import { useControls }       from '../composables/useControls.js'
import { useCustomTabs }     from '../composables/useCustomTabs.js'

const props = defineProps({ open: Boolean })
const emit  = defineEmits(['close'])

const hass = inject('hass')

// ── Settings (auto mode) ────────────────────────────────────────────────────
const { toggle, isVisible, groupByRoom, toggleGroupByRoom, entityOrder, setOrder, sortedByOrder } = useSettings()
const { lightsByArea }  = useAreaLights(hass)
const { mediaPlayers }  = useMediaPlayers(hass)
const { switches, climate, locks, vacuums, persons, tempSensors, humiditySensors } = useControls(hass)
const allControls = computed(() => [
  ...persons.value, ...climate.value, ...locks.value, ...vacuums.value,
  ...switches.value, ...tempSensors.value, ...humiditySensors.value,
])

// ── Custom tabs ─────────────────────────────────────────────────────────────
const {
  customTabs, customTabsEnabled,
  addTab, updateTab, removeTab, reorderTabs,
  addSection, updateSection, removeSection,
  addEntityToTab, removeEntityFromTab,
  addEntityToSection, removeEntityFromSection,
  reorderItems,
} = useCustomTabs()

// ── Navigation ──────────────────────────────────────────────────────────────
const view        = ref('main')   // 'main' | 'tab-editor' | 'entity-picker'
const editingTabId = ref(null)
const pickerTarget = ref(null)    // { tabId, sectionId: string|null }

const editingTab = computed(() => customTabs.value.find((t) => t.id === editingTabId.value) ?? null)

const headerTitle = computed(() => {
  if (view.value === 'tab-editor') return editingTab.value?.name || 'Edit Tab'
  if (view.value === 'entity-picker') {
    if (!pickerTarget.value) return 'Add Entities'
    const tab = customTabs.value.find((t) => t.id === pickerTarget.value.tabId)
    if (pickerTarget.value.sectionId) {
      const sec = tab?.items.find((i) => i.kind === 'section' && i.id === pickerTarget.value.sectionId)
      return `Add to "${sec?.name ?? 'Section'}"`
    }
    return `Add to "${tab?.name ?? 'Tab'}"`
  }
  return 'Settings'
})

function goBack() {
  if (view.value === 'entity-picker') { view.value = 'tab-editor'; return }
  if (view.value === 'tab-editor')    { view.value = 'main'; editingTabId.value = null; return }
  view.value = 'main'
}

function handleClose() {
  view.value = 'main'
  editingTabId.value = null
  emit('close')
}

function openTabEditor(id) { editingTabId.value = id; view.value = 'tab-editor' }

function createAndEditTab() { const id = addTab(); openTabEditor(id) }

function addSectionToCurrentTab() { addSection(editingTabId.value) }

function deleteCurrentTab() { removeTab(editingTabId.value); view.value = 'main' }

// ── Entity picker ───────────────────────────────────────────────────────────
const pickerSearch   = ref('')
const pickerDomain   = ref('')
const pickerSelected = ref(new Set())

const allEntities = computed(() => {
  if (!hass?.value?.states) return []
  return Object.values(hass.value.states)
    .filter((s) => s.state !== 'unavailable')
    .sort((a, b) => {
      const da = a.entity_id.split('.')[0], db = b.entity_id.split('.')[0]
      if (da !== db) return da.localeCompare(db)
      return (a.attributes.friendly_name ?? a.entity_id).localeCompare(b.attributes.friendly_name ?? b.entity_id)
    })
})

const availableDomains = computed(() => [
  ...new Set(allEntities.value.map((s) => s.entity_id.split('.')[0])),
].sort())

const filteredEntities = computed(() => {
  const q = pickerSearch.value.toLowerCase()
  return allEntities.value.filter((s) => {
    if (pickerDomain.value && !s.entity_id.startsWith(pickerDomain.value + '.')) return false
    if (q && !(s.attributes.friendly_name ?? '').toLowerCase().includes(q) && !s.entity_id.toLowerCase().includes(q)) return false
    return true
  })
})

function openPicker(tabId, sectionId) {
  pickerTarget.value = { tabId, sectionId }
  pickerSearch.value = ''
  pickerDomain.value = ''
  // Pre-select current entities in target
  const tab = customTabs.value.find((t) => t.id === tabId)
  if (sectionId) {
    const sec = tab?.items.find((i) => i.kind === 'section' && i.id === sectionId)
    pickerSelected.value = new Set(sec?.entityIds ?? [])
  } else {
    pickerSelected.value = new Set(
      tab?.items.filter((i) => i.kind === 'entity').map((i) => i.entityId) ?? [],
    )
  }
  view.value = 'entity-picker'
}

function togglePickerEntity(entityId) {
  const { tabId, sectionId } = pickerTarget.value
  const next = new Set(pickerSelected.value)
  if (next.has(entityId)) {
    next.delete(entityId)
    sectionId ? removeEntityFromSection(tabId, sectionId, entityId) : removeEntityFromTab(tabId, entityId)
  } else {
    next.add(entityId)
    sectionId ? addEntityToSection(tabId, sectionId, entityId) : addEntityToTab(tabId, entityId)
  }
  pickerSelected.value = next
}

function getEntityName(entityId) {
  const state = hass?.value?.states?.[entityId]
  return state?.attributes?.friendly_name ?? entityId
}

// ── All drag/order refs (declared before watches to avoid TDZ) ──────────────
const orderedLights   = ref([])
const orderedMedia    = ref([])
const orderedControls = ref([])
const lightRowRefs    = [], mediaRowRefs = [], controlRowRefs = []
const entityDrag = ref(null)
const tabDrag    = ref(null)
const tabRowRefs = []
const itemDrag   = ref(null)
const itemRowRefs = []

// ── Watches ──────────────────────────────────────────────────────────────────
watch([lightsByArea, entityOrder], ([areas]) => {
  if (entityDrag.value) return
  orderedLights.value = sortedByOrder(areas.flatMap((r) => r.lights.map((l) => ({ ...l, roomName: r.name }))))
}, { immediate: true })
watch([mediaPlayers, entityOrder], ([players]) => {
  if (entityDrag.value) return
  orderedMedia.value = sortedByOrder([...players])
}, { immediate: true })
watch([allControls, entityOrder], ([items]) => {
  if (entityDrag.value) return
  orderedControls.value = sortedByOrder([...items])
}, { immediate: true })

watch(() => props.open, (v) => { if (!v) { if (entityDrag.value) endEntityDrag(); if (tabDrag.value) endTabDrag() } })

// ── Drag: entity visibility list ────────────────────────────────────────────

function startEntityDrag(e, type, index) {
  e.currentTarget.setPointerCapture(e.pointerId)
  entityDrag.value = { type, index }
}

function moveEntityDrag(e) {
  if (!entityDrag.value) return
  const { type, index } = entityDrag.value
  const refs = { lights: lightRowRefs, media: mediaRowRefs, controls: controlRowRefs }[type]
  const arr  = { lights: orderedLights, media: orderedMedia, controls: orderedControls }[type]
  let target = index, minDist = Infinity
  for (let i = 0; i < refs.length; i++) {
    if (!refs[i]) continue
    const r = refs[i].getBoundingClientRect()
    const d = Math.abs(r.top + r.height / 2 - e.clientY)
    if (d < minDist) { minDist = d; target = i }
  }
  if (target !== index) {
    arr.value.splice(target, 0, arr.value.splice(index, 1)[0])
    entityDrag.value = { type, index: target }
  }
}

function endEntityDrag() {
  if (!entityDrag.value) return
  entityDrag.value = null
  setOrder([...orderedLights.value, ...orderedMedia.value, ...orderedControls.value].map((e) => e.entity_id))
}

// ── Drag: tab list ──────────────────────────────────────────────────────────
function startTabDrag(e, index) {
  e.currentTarget.setPointerCapture(e.pointerId)
  tabDrag.value = { index }
}

function moveTabDrag(e) {
  if (!tabDrag.value) return
  const { index } = tabDrag.value
  let target = index, minDist = Infinity
  for (let i = 0; i < tabRowRefs.length; i++) {
    if (!tabRowRefs[i]) continue
    const r = tabRowRefs[i].getBoundingClientRect()
    const d = Math.abs(r.top + r.height / 2 - e.clientY)
    if (d < minDist) { minDist = d; target = i }
  }
  if (target !== index) { reorderTabs(index, target); tabDrag.value = { index: target } }
}

function endTabDrag() { tabDrag.value = null }

// ── Drag: items within tab editor ───────────────────────────────────────────
function startItemDrag(e, index) {
  e.currentTarget.setPointerCapture(e.pointerId)
  itemDrag.value = { index }
}

function moveItemDrag(e) {
  if (!itemDrag.value || !editingTabId.value) return
  const { index } = itemDrag.value
  let target = index, minDist = Infinity
  for (let i = 0; i < itemRowRefs.length; i++) {
    if (!itemRowRefs[i]) continue
    const r = itemRowRefs[i].getBoundingClientRect()
    const d = Math.abs(r.top + r.height / 2 - e.clientY)
    if (d < minDist) { minDist = d; target = i }
  }
  if (target !== index) { reorderItems(editingTabId.value, index, target); itemDrag.value = { index: target } }
}

function endItemDrag() { itemDrag.value = null }
</script>

<style scoped>
/* ── Backdrop & sheet ──────────────────────────────────────────────────────── */
.sheet-backdrop {
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.6);
  z-index: 100;
  display: flex; align-items: flex-end;
}
.sheet {
  width: 100%; max-height: 85vh;
  background: #0d0f1c;
  border-radius: 1.25rem 1.25rem 0 0;
  border-top: 1px solid #1e2238;
  display: flex; flex-direction: column;
  overflow: hidden;
}

/* ── Header ───────────────────────────────────────────────────────────────── */
.sheet-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: .85rem 1rem .6rem;
  border-bottom: 1px solid #1a1e33;
  flex-shrink: 0;
}
.sheet-title {
  font-size: .75rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: .1em;
  color: #6b7280;
  flex: 1; text-align: center;
}
.hdr-btn {
  width: 26px; height: 26px;
  background: rgba(255,255,255,.06);
  border: none; border-radius: 50%;
  color: #6b7280; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  padding: 4px; transition: background .15s, color .15s;
}
.hdr-btn:hover { background: rgba(255,255,255,.12); color: #fff; }

/* ── Body ─────────────────────────────────────────────────────────────────── */
.sheet-body {
  overflow-y: auto;
  padding: .5rem 0 calc(.5rem + env(safe-area-inset-bottom));
}
.sheet-body--dragging { overflow-y: hidden; user-select: none; -webkit-user-select: none; }
.picker-body { display: flex; flex-direction: column; }

/* ── Rows & primitives ────────────────────────────────────────────────────── */
.divider { height: 1px; background: #1a1e33; margin: .25rem 0; }
.hint { font-size: .7rem; color: #374151; text-align: center; padding: .75rem 1rem; }

.section-row {
  display: flex; align-items: center; justify-content: space-between;
  padding: .55rem 1rem .2rem;
}
.section-label { font-size: .6rem; font-weight: 700; text-transform: uppercase; letter-spacing: .12em; color: #374151; }
.section-label.pl { padding: .65rem 1rem .2rem; }
.field-label { font-size: .6rem; font-weight: 700; text-transform: uppercase; letter-spacing: .12em; color: #374151; padding: .65rem 1rem .2rem; }

.option-row {
  display: flex; align-items: center;
  padding: .55rem 1rem;
  cursor: pointer; -webkit-tap-highlight-color: transparent;
}
.option-label { font-size: .8rem; color: #9ca3af; flex: 1; }

.entity-row {
  display: flex; align-items: center;
  padding: .45rem 1rem .45rem .6rem;
  -webkit-tap-highlight-color: transparent;
  transition: background .1s;
  border-radius: .4rem; margin: 0 .25rem;
}
.entity-row:active { background: rgba(255,255,255,.03); }
.entity-row--dragging { background: rgba(99,102,241,.1); }
.entity-row--section { background: rgba(255,255,255,.02); border-radius: .4rem; margin: .1rem .25rem; }
.entity-row--nested { padding-left: 3.2rem; opacity: .85; }

.entity-name {
  font-size: .75rem; color: #d1d5db;
  flex: 1; min-width: 0;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  margin-right: .5rem;
  display: flex; flex-direction: column; gap: .1rem;
}
.entity-sub { font-size: .6rem; color: #4b5563; }

.drag-handle {
  flex-shrink: 0; width: 28px; height: 28px;
  color: #2d3347; cursor: grab;
  display: flex; align-items: center; justify-content: center;
  touch-action: none; padding: 6px; margin-right: .35rem;
  user-select: none; -webkit-user-select: none;
  transition: color .15s;
}
.drag-handle:active { cursor: grabbing; color: #6b7280; }
.entity-row--dragging .drag-handle { color: #818cf8; }

.tab-icon-sm { width: 16px; height: 16px; flex-shrink: 0; margin-right: .4rem; }

.icon-btn {
  flex-shrink: 0; width: 28px; height: 28px;
  background: none; border: none;
  color: #4b5563; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  border-radius: .3rem; transition: color .15s, background .15s;
  padding: 4px;
}
.icon-btn:hover { color: #9ca3af; background: rgba(255,255,255,.06); }
.icon-btn--danger:hover { color: #f87171; background: rgba(239,68,68,.1); }

.add-btn {
  display: flex; align-items: center; gap: .3rem;
  padding: .3rem .65rem; border-radius: .4rem;
  background: rgba(255,255,255,.06); border: none;
  font-size: .7rem; color: #9ca3af; cursor: pointer;
  transition: background .15s; white-space: nowrap;
}
.add-btn:hover { background: rgba(255,255,255,.1); color: #fff; }

.danger-btn {
  display: flex; align-items: center; gap: .4rem;
  margin: .75rem 1rem; padding: .55rem .75rem; border-radius: .5rem;
  background: rgba(239,68,68,.08); border: 1px solid rgba(239,68,68,.15);
  font-size: .75rem; color: #f87171; cursor: pointer;
  transition: background .15s;
}
.danger-btn:hover { background: rgba(239,68,68,.15); }

/* ── Toggle ──────────────────────────────────────────────────────────────── */
.toggle {
  flex-shrink: 0; width: 36px; height: 20px; border-radius: 10px;
  background: #1f2333; border: 1px solid #2a2f4a;
  position: relative; transition: background .2s, border-color .2s; cursor: pointer;
}
.toggle--on { background: rgba(99,102,241,.35); border-color: rgba(99,102,241,.5); }
.toggle-thumb {
  position: absolute; top: 2px; left: 2px; width: 14px; height: 14px;
  border-radius: 50%; background: #4b5563;
  transition: transform .2s, background .2s; pointer-events: none;
}
.toggle--on .toggle-thumb { transform: translateX(16px); background: #818cf8; }

/* ── Tab editor ──────────────────────────────────────────────────────────── */
.input-row { padding: .2rem 1rem; }
.text-input {
  width: 100%; background: #0c0e18; border: 1px solid #1e2238;
  border-radius: .5rem; color: #f3f4f6; font-size: .85rem;
  padding: .55rem .75rem; outline: none;
  transition: border-color .15s;
}
.text-input:focus { border-color: #374151; }

.inline-input {
  background: none; border: none; border-bottom: 1px solid #2d3347;
  color: #d1d5db; font-size: .75rem; font-weight: 600;
  padding: .1rem 0; outline: none; width: 100%;
  transition: border-color .15s;
}
.inline-input:focus { border-color: #4b5563; }

.icon-grid {
  display: grid; grid-template-columns: repeat(6, 1fr);
  gap: .35rem; padding: .2rem 1rem;
}
.icon-option {
  aspect-ratio: 1; border-radius: .5rem;
  background: rgba(255,255,255,.04); border: 1px solid transparent;
  display: flex; align-items: center; justify-content: center;
  color: #4b5563; cursor: pointer; transition: background .15s, color .15s, border-color .15s;
}
.icon-option:hover { background: rgba(255,255,255,.08); color: #9ca3af; }
.icon-option--active { background: rgba(255,255,255,.08); border-color: rgba(255,255,255,.15); }

.color-grid {
  display: flex; flex-wrap: wrap; gap: .45rem; padding: .2rem 1rem;
}
.color-swatch {
  width: 26px; height: 26px; border-radius: 50%;
  border: 2px solid transparent; cursor: pointer;
  transition: transform .15s, border-color .15s;
}
.color-swatch:hover { transform: scale(1.15); }
.color-swatch--active { border-color: #fff; transform: scale(1.15); }

/* ── Entity picker ───────────────────────────────────────────────────────── */
.search-row {
  display: flex; align-items: center; gap: .5rem;
  padding: .5rem 1rem; border-bottom: 1px solid #1a1e33;
  flex-shrink: 0;
}
.search-input {
  flex: 1; background: none; border: none;
  color: #f3f4f6; font-size: .85rem; outline: none;
}

.domain-chips {
  display: flex; gap: .3rem; padding: .4rem .75rem;
  overflow-x: auto; scrollbar-width: none; flex-shrink: 0;
  border-bottom: 1px solid #1a1e33;
}
.domain-chips::-webkit-scrollbar { display: none; }
.domain-chip {
  flex-shrink: 0; padding: .2rem .55rem; border-radius: 1rem;
  background: rgba(255,255,255,.04); border: 1px solid #1e2238;
  font-size: .65rem; color: #6b7280; cursor: pointer;
  transition: background .15s, color .15s;
  white-space: nowrap;
}
.domain-chip--on { background: rgba(99,102,241,.2); border-color: rgba(99,102,241,.4); color: #a5b4fc; }

.picker-count { font-size: .65rem; color: #374151; padding: .3rem 1rem; flex-shrink: 0; }

.picker-row { cursor: pointer; }

.check-box {
  flex-shrink: 0; width: 18px; height: 18px; border-radius: .25rem;
  background: rgba(255,255,255,.05); border: 1px solid #2d3347;
  display: flex; align-items: center; justify-content: center;
  margin-right: .5rem; transition: background .15s, border-color .15s;
  color: #818cf8;
}
.check-box--on { background: rgba(99,102,241,.25); border-color: rgba(99,102,241,.5); }

.domain-badge {
  flex-shrink: 0; font-size: .55rem; font-weight: 600;
  color: #374151; background: rgba(255,255,255,.04);
  border: 1px solid #1e2238; border-radius: .25rem;
  padding: .1rem .3rem; white-space: nowrap;
}

/* ── Transition ──────────────────────────────────────────────────────────── */
.sheet-enter-active, .sheet-leave-active { transition: transform .25s ease, opacity .25s ease; }
.sheet-enter-from, .sheet-leave-to { transform: translateY(100%); opacity: 0; }
</style>
