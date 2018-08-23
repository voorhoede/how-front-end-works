export default function animateScrollToElement(target) {
  const targetElement = document.querySelector(target)
  targetElement.scrollIntoView({behavior: 'smooth', block: 'start'})
}