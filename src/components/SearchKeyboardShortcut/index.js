import { useEffect } from 'react';

export function useSearchKeyboardShortcut() {
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Check for Cmd+K on Mac or Ctrl+K on Windows/Linux
      const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
      const isShortcut = isMac ? event.metaKey && event.key === 'k' : event.ctrlKey && event.key === 'k';
      
      if (isShortcut) {
        event.preventDefault();
        
        // Find the search input - it should have the class 'navbar__search-input'
        const searchInput = document.querySelector('.navbar__search-input');
        
        if (searchInput) {
          searchInput.focus();
          // If the search modal is not visible, we might need to click the search button first
          const searchButton = document.querySelector('.navbar__search button');
          if (searchButton && !searchInput.offsetParent) {
            searchButton.click();
            // Wait a bit for the modal to open, then focus the input
            setTimeout(() => {
              searchInput.focus();
            }, 100);
          }
        }
      }
    };

    // Add event listener
    document.addEventListener('keydown', handleKeyDown);

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
}