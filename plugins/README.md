# Docusaurus Plugins

This directory contains custom Docusaurus plugins for the Roo Code documentation site.

## Currently Active Plugins

No custom plugins are currently active. The directory is maintained for future plugin development.

## Previous Plugins (Removed)

The following plugins were previously used but have been removed as they interfered with search functionality:

- `suppress-search-warnings.js` - Attempted to suppress webpack warnings but broke search functionality
- `empty-module.js` - Helper module for the warning suppression plugin
- `webpack-warning-filter.js` - Earlier attempt at filtering warnings (deprecated)

## Note on Search Warnings

The `@easyops-cn/docusaurus-search-local` plugin may produce some harmless warnings during build about missing modules like `proxiedGenerated`. These warnings do not affect functionality and can be safely ignored.