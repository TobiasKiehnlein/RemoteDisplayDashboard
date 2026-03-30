// Production entry point: registers a custom HTML element that Home Assistant
// loads as a panel. HA sets the `hass` property on it whenever state changes.
import { createApp, ref } from 'vue'
import App from './App.vue'

class VueDashboardPanel extends HTMLElement {
  constructor() {
    super()
    this._hassRef = ref(null)
    this._app = null
  }

  connectedCallback() {
    const mountPoint = document.createElement('div')
    mountPoint.style.cssText = 'height:100%;width:100%;'
    this.appendChild(mountPoint)

    this._app = createApp(App)
    this._app.provide('hass', this._hassRef)
    this._app.mount(mountPoint)
  }

  disconnectedCallback() {
    this._app?.unmount()
    this._app = null
  }

  // Called by HA whenever the hass object updates (state changes, etc.)
  set hass(hass) {
    this._hassRef.value = hass
  }
}

customElements.define('vue-dashboard-panel', VueDashboardPanel)
