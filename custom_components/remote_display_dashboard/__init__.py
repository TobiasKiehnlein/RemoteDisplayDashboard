"""Remote Display Dashboard — custom panel for Home Assistant."""
from __future__ import annotations

import logging
from pathlib import Path

from homeassistant.components.frontend import async_register_built_in_panel, async_remove_panel
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant

DOMAIN = "remote_display_dashboard"
_LOGGER = logging.getLogger(__name__)

_DIST_DIR = Path(__file__).parent / "dist"
_STATIC_URL = "/remote-display-dashboard-static"
_PANEL_URL = "remote-display-dashboard"
_PANEL_ELEMENT = "remote-display-panel"
_JS_FILE = "remote-display-dashboard.js"


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Register the Remote Display Dashboard panel."""
    if not _DIST_DIR.exists():
        _LOGGER.error(
            "Remote Display Dashboard: built files not found at %s.",
            _DIST_DIR,
        )
        return False

    hass.http.register_static_path(_STATIC_URL, str(_DIST_DIR), cache_headers=False)

    async_register_built_in_panel(
        hass,
        component_name="custom",
        sidebar_title="Remote Display",
        sidebar_icon="mdi:monitor-dashboard",
        frontend_url_path=_PANEL_URL,
        config={
            "_panel_custom": {
                "name": _PANEL_ELEMENT,
                "module_url": f"{_STATIC_URL}/{_JS_FILE}",
                "embed_iframe": False,
                "trust_external": False,
            }
        },
    )

    _LOGGER.info("Remote Display Dashboard panel registered at /%s", _PANEL_URL)
    return True


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Unload the Remote Display Dashboard panel."""
    async_remove_panel(hass, _PANEL_URL)
    return True
