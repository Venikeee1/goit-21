/* Intersection Observer */

const defaultOptions = {
  rootMargin: '-50px 0px -50px 0px',
  threshold: 0,
}

class IObserver {
  constructor(observerHandler, options = defaultOptions) {
    this.observer = new IntersectionObserver(observerHandler, options)
  }

  observe(element) {
    this.observer.observe(element)
  }
}

export default IObserver;
