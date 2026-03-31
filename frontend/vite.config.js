import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// Rollup plugin: merges any emitted CSS into the JS bundle so HA only has to
// load one file via module_url. Runs inside the lib build only.
function inlineCssPlugin() {
  return {
    name: 'inline-css',
    generateBundle(_opts, bundle) {
      const cssAssets = Object.entries(bundle).filter(([, chunk]) => chunk.type === 'asset' && chunk.fileName.endsWith('.css'))
      const jsChunks = Object.entries(bundle).filter(([, chunk]) => chunk.type === 'chunk')
      if (!cssAssets.length || !jsChunks.length) return
      const css = cssAssets.map(([, a]) => a.source).join('\n')
      const inject = `;(function(){var s=document.createElement('style');s.textContent=${JSON.stringify(css)};document.head.appendChild(s);})()`
      const [jsKey, jsChunk] = jsChunks[0]
      bundle[jsKey].code = inject + '\n' + jsChunk.code
      cssAssets.forEach(([key]) => delete bundle[key])
    },
  }
}

export default defineConfig(({ command }) => {
  if (command === 'build') {
    // Production: compile to a single ES module that registers a custom element.
    return {
      plugins: [vue(), inlineCssPlugin()],
      build: {
        lib: {
          entry: resolve(__dirname, 'src/main.js'),
          formats: ['es'],
          fileName: () => 'remote-display-dashboard.js',
        },
        outDir: resolve(__dirname, '../custom_components/remote_display_dashboard/panel'),
        emptyOutDir: true,
      },
    }
  }

  // Dev: standard SPA served by Vite at http://localhost:5173.
  // HA uses a panel_iframe to embed this URL during development.
  return {
    plugins: [vue()],
    server: {
      port: 5173,
      host: '0.0.0.0', // reachable from inside a Docker/VM HA instance
    },
  }
})
