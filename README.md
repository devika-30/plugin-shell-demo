# Plugin Shell Demo

## Overview

This project demonstrates a plugin boundary architecture where the shell application dynamically loads the LabPluginDemo module from a separate folder.

## LabPlugin API v0

### Methods

#### initialize()
Called when the plugin is loaded.

#### dispose()
Called when the plugin is unloaded.

## UI Hooks

### Main View
Displays plugin content inside the shell.

### Menu Item
Provides navigation entry for the plugin.

### Widget
Provides sidebar/status information.

## Configuration

Plugins are configured through:

public/plugins.json

Example:

```json
[
  {
    "name": "LabPluginDemo",
    "enabled": true
  }
]
```

## Acceptance Criteria Verification

- Shell loads LabPluginDemo from a separate folder.
- Plugin can be enabled or disabled through plugins.json.
- No changes to shell code are required when enabling or disabling plugins.
- Plugin UI renders successfully.