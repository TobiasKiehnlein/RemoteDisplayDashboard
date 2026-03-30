<template>
  <div class="hello-world">
    <h2>Hello, World! 👋</h2>
    <p>
      This panel is built with <strong>Vue {{ version }}</strong> + <strong>Vite</strong>
      and loaded as a native Home Assistant panel.
    </p>
    <p class="hint">
      Edit <code>frontend/src/App.vue</code> to start building your dashboard.
    </p>
  </div>
</template>

<script setup>
import { version } from 'vue'
</script>

<style scoped>
.hello-world {
  background: linear-gradient(135deg, #1e3a5f 0%, #1f2937 100%);
  border: 1px solid #3b82f6;
  border-radius: 0.75rem;
  padding: 2rem;
}

h2 {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
}

p {
  color: #d1d5db;
  line-height: 1.6;
  margin-bottom: 0.5rem;
}

strong { color: #60a5fa; }

.hint { font-size: 0.9rem; color: #9ca3af; }

code {
  background: #374151;
  padding: 0.1em 0.4em;
  border-radius: 0.25rem;
  font-size: 0.85em;
  color: #34d399;
}
</style>
