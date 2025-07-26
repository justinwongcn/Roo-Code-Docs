// Module to replace missing proxiedGenerated imports
// This prevents webpack warnings from @easyops-cn/docusaurus-search-local
// while providing safe defaults for expected properties

// Provide safe defaults for properties the search plugin might expect
module.exports = {
  // Common properties that might be accessed
  baseUrl: '/',
  outDir: '',
  routeBasePath: '/',
  
  // Provide empty string defaults for any string operations
  toString: () => '',
  valueOf: () => '',
  
  // Create a proxy that returns safe defaults for any property access
  default: new Proxy({}, {
    get: (target, prop) => {
      // Return empty string for any property access
      // This prevents "Cannot read properties of undefined" errors
      if (typeof prop === 'string') {
        return '';
      }
      return undefined;
    }
  })
};

// Also export as default
module.exports.default = module.exports;