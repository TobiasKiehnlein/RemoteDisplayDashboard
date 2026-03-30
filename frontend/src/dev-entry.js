// Dev-only entry point.
// If VITE_HA_URL + VITE_HA_TOKEN are set in .env.local it connects to real HA
// via the WebSocket API and provides a live hass object.
// Without those variables it falls back to a mock so the app still loads.
import { createApp, ref } from 'vue'
import {
  createConnection,
  createLongLivedTokenAuth,
  subscribeEntities,
  getUser,
  getConfig,
  callService,
} from 'home-assistant-js-websocket'
import App from './App.vue'

const HA_URL   = import.meta.env.VITE_HA_URL   // e.g. http://homeassistant.local:8123
const HA_TOKEN = import.meta.env.VITE_HA_TOKEN  // Long-Lived Access Token from HA profile

async function buildRealHass() {
  const auth = createLongLivedTokenAuth(HA_URL, HA_TOKEN)
  const connection = await createConnection({ auth })

  const [user, config] = await Promise.all([getUser(connection), getConfig(connection)])

  const hassRef = ref(null)

  subscribeEntities(connection, (states) => {
    hassRef.value = {
      user,
      config,
      states,
      connection,
      callService: (domain, service, serviceData) =>
        callService(connection, domain, service, serviceData),
    }
  })

  return hassRef
}

function buildMockHass() {
  return ref({
    user: { name: 'Dev User' },
    config: { version: 'dev', location_name: 'Dev Home' },
    states: {},
    callService: async () => {},
  })
}

async function main() {
  let hassRef

  if (HA_URL && HA_TOKEN) {
    try {
      console.info(`[vue-dashboard] Connecting to HA at ${HA_URL}…`)
      hassRef = await buildRealHass()
      console.info('[vue-dashboard] Connected — using real hass object.')
    } catch (err) {
      console.warn('[vue-dashboard] HA connection failed, using mock:', err)
      hassRef = buildMockHass()
    }
  } else {
    console.info('[vue-dashboard] No VITE_HA_URL/VITE_HA_TOKEN in .env.local — using mock hass.')
    hassRef = buildMockHass()
  }

  const app = createApp(App)
  app.provide('hass', hassRef)
  app.mount('#app')
}

main()
