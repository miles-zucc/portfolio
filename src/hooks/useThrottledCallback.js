import { useCallback } from "react";
import throttle from "lodash.throttle";

/**
 *
 * @param {*} callback
 * @param {*} interval
 */
function useThrottledCallback(callback, dependencies = [], interval = 20) {
  const handleMouseMove = useCallback(event => {
    if (event.persist) {
      // Signal to React not to nullify the event object
      event.persist();
    }
    // Create Throttled function
    const throttledFunction = throttle(callback, interval);
    // Launch debaunced function
    throttledFunction(event);
  }, dependencies);

  return handleMouseMove;
}

export default useThrottledCallback;
