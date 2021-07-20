import { useCallback } from "react";
import debounce from "lodash.debounce";

/**
 *
 * @param {*} callback
 * @param {*} interval
 */
function useDebouncedCallback(callback, dependencies = [], interval = 20) {
  const handleMouseMove = useCallback(event => {
    if (event.persist) {
      // Signal to React not to nullify the event object
      event.persist();
    }
    // Create debounced function
    const debouncedFunction = debounce(callback, interval);
    // Launch debaunced function
    debouncedFunction(event);
  }, dependencies);

  return handleMouseMove;
}

export default useDebouncedCallback;
