import { useCallback } from 'react';

export function useScrollToHash() {
  return useCallback((hash) => {
    if (!hash) return;
    const element = document.getElementById(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', `/#${hash}`);
    }
  }, []);
}
