import gsap from "gsap";

const DEFAULT_DELAY = 0;
const DEFAULT_DURATION = 1;
const DEFAULT_STAGGER_VALUE = 0;

/**
 * Fade in
 * @param {*} element
 * @param {*} delay
 * @param {*} duration
 * @param {*} stagger
 */
export const fadeInDownAnimation = (
  element,
  delay = DEFAULT_DELAY,
  duration = DEFAULT_DURATION,
  stagger = DEFAULT_STAGGER_VALUE
) => {
  if (!element || !delay || !duration) {
    console.error("Invialid arguments provided to animation");
    return;
  }
  return gsap.fromTo(
    element,
    { opacity: 0.0, y: -30 },
    { delay, duration, stagger, opacity: 1.0, y: 0 }
  );
};

/**
 * Fade out
 * @param {*} element
 * @param {*} delay
 * @param {*} duration
 * @param {*} stagger
 */
export const fadeOutAnimation = (
  element,
  delay = DEFAULT_DELAY,
  duration = DEFAULT_DURATION,
  stagger = DEFAULT_STAGGER_VALUE
) => {
  if (!element || !delay || !duration) {
    console.error("Invialid arguments provided to animation");
    return;
  }
  return gsap.fromTo(
    element,
    { opacity: 1.0 },
    { delay, duration, stagger, opacity: 0.0 }
  );
};
