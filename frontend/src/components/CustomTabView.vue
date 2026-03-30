<template>
  <div class="custom-tab-view">
    <div v-if="!hass" class="empty">Connecting…</div>
    <template v-else-if="renderBlocks.length">
      <template v-for="block in renderBlocks" :key="block.key">
        <section v-if="block.kind === 'section'" class="section">
          <div v-if="block.name" class="section-label">{{ block.name }}</div>
          <div class="card-grid">
            <EntityCard v-for="id in block.entityIds" :key="id" :entityId="id" />
          </div>
        </section>
        <div v-else class="card-grid">
          <EntityCard v-for="id in block.entityIds" :key="id" :entityId="id" />
        </div>
      </template>
    </template>
    <div v-else class="empty">
      No entities yet — tap Settings to configure.
    </div>
  </div>
</template>

<script setup>
import { computed, inject } from 'vue'
import EntityCard from './EntityCard.vue'

const props = defineProps({ tab: { type: Object, required: true } })
const hass = inject('hass')

const renderBlocks = computed(() => {
  const blocks = []
  let loose = [], looseKeys = []

  function flush() {
    if (!loose.length) return
    blocks.push({ kind: 'entities', key: 'loose-' + looseKeys.join('-'), entityIds: [...loose] })
    loose = []; looseKeys = []
  }

  for (const item of props.tab.items) {
    if (item.kind === 'entity') {
      loose.push(item.entityId)
      looseKeys.push(item.id)
    } else if (item.kind === 'section') {
      flush()
      blocks.push({ kind: 'section', key: item.id, name: item.name, entityIds: item.entityIds })
    }
  }
  flush()
  return blocks
})
</script>

<style scoped>
.custom-tab-view {
  padding: 0.75rem 0.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
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
