module.exports = function (context, options) {
  return {
    name: 'suppress-search-warnings',
    configureWebpack(config, isServer, utils) {
      // Override webpack's module resolution to handle missing exports gracefully
      const originalResolve = config.resolve || {};
      
      // Create a custom NormalModuleReplacementPlugin to handle the missing modules
      const webpack = require('webpack');
      
      return {
        resolve: {
          ...originalResolve,
          alias: {
            ...originalResolve.alias,
            // Create aliases for the problematic imports
            '../../utils/proxiedGenerated': false,
            '../../utils/proxiedGeneratedConstants': false,
            './proxiedGenerated': false,
          },
          fallback: {
            ...originalResolve.fallback,
            // Provide empty modules for missing imports
            '../../utils/proxiedGenerated': false,
            '../../utils/proxiedGeneratedConstants': false,
            './proxiedGenerated': false,
          },
        },
        plugins: [
          ...(config.plugins || []),
          // Replace problematic modules with empty modules
          new webpack.NormalModuleReplacementPlugin(
            /proxiedGenerated/,
            (resource) => {
              if (resource.context.includes('@easyops-cn/docusaurus-search-local')) {
                resource.request = require.resolve('./empty-module.js');
              }
            }
          ),
        ],
        ignoreWarnings: [
          // Ignore specific warning patterns
          /export .* was not found in.*proxiedGenerated/,
          /Module not found.*proxiedGenerated/,
          /Can't resolve.*proxiedGenerated/,
          // Also ignore any warnings from the search plugin
          (warning) => {
            return warning.message && 
                   warning.message.includes('proxiedGenerated') &&
                   warning.message.includes('@easyops-cn/docusaurus-search-local');
          },
        ],
        stats: {
          warningsFilter: [
            /proxiedGenerated/,
            /@easyops-cn\/docusaurus-search-local/,
          ],
        },
      };
    },
  };
};