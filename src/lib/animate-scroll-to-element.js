export default function animateScrollToElement(target) {
  const reducedMotionMediaQuery = window.matchMedia('(prefers-reduced-motion)')

  if(!reducedMotionMediaQuery.matches) {
    const targetElement = document.querySelector(target)
    const endPosition = targetElement.getBoundingClientRect().top
    const startPosition = window.scrollY
    const scrollDuration = 700
    let startTimestamp = null

    location.hash = target
    window.requestAnimationFrame(step)

    function step(timestamp) {
      if(!startTimestamp) {
        startTimestamp = timestamp
      }

      const animationProgress = timestamp - startTimestamp

      const currentPosition = easeOutQuad(animationProgress, startPosition, endPosition, scrollDuration)

      window.scrollTo(0, currentPosition)

      if(animationProgress < scrollDuration) {
        window.requestAnimationFrame(step)
      }
    }

    function easeOutQuad(currentTime, startValue, scrollDistanceValue, duration) {
      return -scrollDistanceValue * (currentTime /= duration) * (currentTime - 2) + startValue
    }
  }
}
