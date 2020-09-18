export default {
  get isDesktop() {
    return window.innerWidth >= 1200
  },
  get isMobile() {
    return window.innerWidth <= 700
  }
}
