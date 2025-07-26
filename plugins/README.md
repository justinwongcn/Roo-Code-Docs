# Docusaurus Plugins

This directory contains custom Docusaurus plugins for the Roo Code documentation site.

## suppress-search-warnings.js

This plugin suppresses webpack module resolution warnings that occur with the `@easyops-cn/docusaurus-search-local` plugin in Docusaurus v3.

### Background

The search plugin tries to import modules that don't exist in Docusaurus v3:
- `../../utils/proxiedGenerated`
- `../../utils/proxiedGeneratedConstants`
- `./proxiedGenerated`

These imports were valid in Docusaurus v2 but have been removed in v3, causing harmless but noisy warnings during the build process.

### How it works

The plugin uses multiple strategies to suppress these warnings:

1. **Module aliases**: Sets problematic imports to `false` to prevent resolution
2. **Module replacement**: Uses webpack's `NormalModuleReplacementPlugin` to replace missing modules with an empty module
3. **Warning filters**: Filters out specific warning patterns from webpack's output
4. **Stats configuration**: Configures webpack stats to ignore these warnings

### Usage

The plugin is automatically loaded via `docusaurus.config.ts`. No additional configuration is needed.

### Alternative approaches

If you prefer not to use the plugin, you can:

1. Use the `build:quiet` npm script: `npm run build:quiet`
2. Set NODE_OPTIONS environment variable: `NODE_OPTIONS='--no-warnings' npm run build`

## empty-module.js

A simple empty module used by `suppress-search-warnings.js` as a replacement for missing imports.

## webpack-warning-filter.js (deprecated)

An earlier attempt at filtering warnings. Kept for reference but not currently used.