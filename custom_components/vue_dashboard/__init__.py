"""Vue Dashboard — custom panel integration for Home Assistant."""
from __future__ import annotations

import logging
from pathlib import Path

from homeassistant.components.frontend import async_register_built_in_panel
from homeassistant.core import HomeAssistant

DOMAIN = "vue_dashboard"
_LOGGER = logging.getLogger(__name__)

_DIST_DIR = Path(__file__).parent / "dist"
_STATIC_URL = "/vue-dashboard-static"
_PANEL_URL = "vue-dashboard"


async def async_setup(hass: HomeAssistant, config: dict) -> bool:
    """Register the Vue Dashboard panel."""
    if not _DIST_DIR.exists():
        _LOGGER.error(
            "Vue Dashboard: built files not found at %s. "
            "Run `cd frontend && npm run build` to generate them.",
            _DIST_DIR,
        )
        return False

    # Serve the Vite build output as static files.
    hass.http.register_static_path(_STATIC_URL, str(_DIST_DIR), cache_headers=False)

    # Register the panel — HA loads the JS module and calls the custom element.
    async_register_built_in_panel(
        hass,
        component_name="custom",
        sidebar_title="Vue Dashboard",
        sidebar_icon="mdi:view-dashboard",
        frontend_url_path=_PANEL_URL,
        config={
            "_panel_custom": {
                "name": "vue-dashboard-panel",  # must match customElements.define()
                "module_url": f"{_STATIC_URL}/vue-dashboard.js",
                "embed_iframe": False,
                "trust_external": False,
            }
        },
    )

    _LOGGER.info("Vue Dashboard panel registered at /%s", _PANEL_URL)
    return True
