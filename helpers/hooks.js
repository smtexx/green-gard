import { useEffect } from 'react';

export function useSpinner(spinnerID, dependencies) {
  useEffect(() => {
    function hideSpinner() {
      document.getElementById(spinnerID).classList.remove('show');
    }
    const state = document.readyState;
    if (state === 'complete') {
      hideSpinner();
    } else {
      window.addEventListener('load', hideSpinner, { once: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...dependencies]);
}
