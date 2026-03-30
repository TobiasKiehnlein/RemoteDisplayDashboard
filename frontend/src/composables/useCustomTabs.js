import { ref, watch } from 'vue'

const TABS_KEY    = 'vd-custom-tabs'
const ENABLED_KEY = 'vd-custom-tabs-enabled'

function uid() { return Math.random().toString(36).slice(2, 9) }

const customTabs        = ref(JSON.parse(localStorage.getItem(TABS_KEY) ?? 'null') ?? [])
const customTabsEnabled = ref(localStorage.getItem(ENABLED_KEY) === 'true')

watch(customTabs,        (v) => localStorage.setItem(TABS_KEY, JSON.stringify(v)), { deep: true })
watch(customTabsEnabled, (v) => localStorage.setItem(ENABLED_KEY, String(v)))

export function useCustomTabs() {
  // ── Tabs ────────────────────────────────────────────────────────────────────

  function addTab(name = 'New Tab', icon = 'bulb', color = '#f59e0b') {
    const id = uid()
    customTabs.value = [...customTabs.value, { id, name, icon, color, items: [] }]
    return id
  }

  function updateTab(id, changes) {
    customTabs.value = customTabs.value.map((t) => (t.id === id ? { ...t, ...changes } : t))
  }

  function removeTab(id) {
    customTabs.value = customTabs.value.filter((t) => t.id !== id)
  }

  function reorderTabs(from, to) {
    const arr = [...customTabs.value]
    arr.splice(to, 0, arr.splice(from, 1)[0])
    customTabs.value = arr
  }

  // ── Sections ────────────────────────────────────────────────────────────────

  function addSection(tabId, name = 'Section') {
    const id = uid()
    customTabs.value = customTabs.value.map((t) => {
      if (t.id !== tabId) return t
      return { ...t, items: [...t.items, { kind: 'section', id, name, entityIds: [] }] }
    })
    return id
  }

  function updateSection(tabId, sectionId, changes) {
    customTabs.value = customTabs.value.map((t) => {
      if (t.id !== tabId) return t
      return {
        ...t,
        items: t.items.map((item) =>
          item.kind === 'section' && item.id === sectionId ? { ...item, ...changes } : item,
        ),
      }
    })
  }

  function removeSection(tabId, sectionId) {
    customTabs.value = customTabs.value.map((t) => {
      if (t.id !== tabId) return t
      return { ...t, items: t.items.filter((i) => !(i.kind === 'section' && i.id === sectionId)) }
    })
  }

  // ── Entities (top-level in tab) ─────────────────────────────────────────────

  function addEntityToTab(tabId, entityId) {
    customTabs.value = customTabs.value.map((t) => {
      if (t.id !== tabId) return t
      if (t.items.some((i) => i.kind === 'entity' && i.entityId === entityId)) return t
      return { ...t, items: [...t.items, { kind: 'entity', id: uid(), entityId }] }
    })
  }

  function removeEntityFromTab(tabId, entityId) {
    customTabs.value = customTabs.value.map((t) => {
      if (t.id !== tabId) return t
      return { ...t, items: t.items.filter((i) => !(i.kind === 'entity' && i.entityId === entityId)) }
    })
  }

  // ── Entities (within a section) ─────────────────────────────────────────────

  function addEntityToSection(tabId, sectionId, entityId) {
    customTabs.value = customTabs.value.map((t) => {
      if (t.id !== tabId) return t
      return {
        ...t,
        items: t.items.map((item) => {
          if (item.kind !== 'section' || item.id !== sectionId) return item
          if (item.entityIds.includes(entityId)) return item
          return { ...item, entityIds: [...item.entityIds, entityId] }
        }),
      }
    })
  }

  function removeEntityFromSection(tabId, sectionId, entityId) {
    customTabs.value = customTabs.value.map((t) => {
      if (t.id !== tabId) return t
      return {
        ...t,
        items: t.items.map((item) => {
          if (item.kind !== 'section' || item.id !== sectionId) return item
          return { ...item, entityIds: item.entityIds.filter((id) => id !== entityId) }
        }),
      }
    })
  }

  // ── Item reorder within a tab ────────────────────────────────────────────────

  function reorderItems(tabId, from, to) {
    customTabs.value = customTabs.value.map((t) => {
      if (t.id !== tabId) return t
      const items = [...t.items]
      items.splice(to, 0, items.splice(from, 1)[0])
      return { ...t, items }
    })
  }

  return {
    customTabs,
    customTabsEnabled,
    addTab,
    updateTab,
    removeTab,
    reorderTabs,
    addSection,
    updateSection,
    removeSection,
    addEntityToTab,
    removeEntityFromTab,
    addEntityToSection,
    removeEntityFromSection,
    reorderItems,
  }
}
