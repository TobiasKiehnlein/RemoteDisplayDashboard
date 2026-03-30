# HA Vue Dashboard

A Home Assistant custom panel built with **Vue 3 + Vite**. Write your HA dashboard directly in `.vue` files, with full HMR in development and a single-file bundle in production.

---

## How it works

```
frontend/src/          ← your Vue source (edit this)
       ↓ npm run build
custom_components/vue_dashboard/dist/vue-dashboard.js
       ↓ HA loads via panel_custom
sidebar panel in Home Assistant
```

In production HA loads the built JS as a **custom element** (`<vue-dashboard-panel>`). The element receives the live `hass` object (states, services, user, config) via its `hass` setter, which is wired to a Vue reactive ref injected into your component tree.

In development a Vite dev server runs the app as a normal SPA with a mock `hass` object, and HA embeds it via `panel_iframe` — giving you instant HMR without rebuilding.

---

## Prerequisites

- Node 18+
- Python 3.11+ (Home Assistant)
- Home Assistant 2023.1+

---

## Development setup

### 1. Install frontend dependencies

```bash
cd frontend
npm install
```

### 2. Start the Vite dev server

```bash
npm run dev
# → http://localhost:5173  (or 0.0.0.0:5173 if HA runs in Docker/VM)
```

### 3. Add an iframe panel to Home Assistant

In your HA `configuration.yaml`:

```yaml
panel_iframe:
  vue_dashboard_dev:
    title: "Vue Dashboard"
    icon: mdi:view-dashboard
    url: "http://localhost:5173"
    # If running the dev server on another machine, use its IP:
    # url: "http://192.168.1.x:5173"
```

Restart HA. The panel appears in the sidebar and hot-reloads as you edit `.vue` files.

### 4. (Optional) Connect to real HA in dev mode

Instead of the mock, you can connect directly to your HA instance via its WebSocket API:

```bash
cp frontend/.env.local.example frontend/.env.local
# then edit .env.local and fill in VITE_HA_URL and VITE_HA_TOKEN
```

**Getting a Long-Lived Access Token:**
1. Open HA → click your username in the bottom-left sidebar
2. Scroll to **Long-Lived Access Tokens** → **Create Token**
3. Copy the token into `VITE_HA_TOKEN`

Restart `npm run dev`. The dev app now receives live entity states, user info, and config — identical to what the production panel gets.

> `.env.local` is gitignored. Never commit real tokens.

---

## Production setup

### 1. Build the frontend

```bash
cd frontend
npm run build
# Outputs to: custom_components/vue_dashboard/dist/vue-dashboard.js
```

### 2. Copy the integration to Home Assistant

Copy the entire `custom_components/vue_dashboard/` folder into your HA config directory:

```
<ha-config>/
└── custom_components/
    └── vue_dashboard/       ← copy this whole folder
        ├── __init__.py
        ├── manifest.json
        └── dist/
            └── vue-dashboard.js
```

### 3. Enable the integration

In `configuration.yaml`:

```yaml
vue_dashboard:
```

Restart HA. The **Vue Dashboard** entry appears in the sidebar.

---

## HACS distribution

1. Push this repo to GitHub (including the built `dist/` folder — it must be committed).
2. In HACS → Integrations → Custom repositories, add your repo URL with category **Integration**.
3. Install from HACS. HA picks up the integration automatically after restart.

> The `hacs.json` at the repo root tells HACS where to find the integration (`content_in_root: false` → looks in `custom_components/`).

---

## Project structure

```
.
├── frontend/                     # Vue + Vite source
│   ├── src/
│   │   ├── dev-entry.js          # SPA entry (dev only, provides mock hass)
│   │   ├── main.js               # Custom element entry (production)
│   │   ├── App.vue               # Root component
│   │   └── components/
│   │       └── HelloWorld.vue
│   ├── index.html                # Dev HTML shell
│   ├── vite.config.js            # Dev = SPA, Build = ES lib → custom element
│   └── package.json
│
├── custom_components/
│   └── vue_dashboard/
│       ├── __init__.py           # Registers static path + panel_custom
│       ├── manifest.json
│       └── dist/                 # Built output (git-committed for HACS)
│
├── hacs.json
└── .gitignore
```

---

## Using the `hass` object in components

`hass` is provided as a Vue reactive ref at the app root and can be injected anywhere:

```vue
<script setup>
import { inject, computed } from 'vue'

const hass = inject('hass')   // Ref<hass | null>

const lightStates = computed(() =>
  Object.values(hass.value?.states ?? {}).filter(s => s.entity_id.startsWith('light.'))
)
</script>
```

The `hass` object gives you:
- `hass.value.states` — all entity states
- `hass.value.callService(domain, service, data)` — call any HA service
- `hass.value.user` — logged-in user info
- `hass.value.config` — HA configuration (location, version, …)
