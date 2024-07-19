export default class PageView {
  constructor (delegate, element) {
    this.delegate = delegate
    this.element = element
  }

  cacheSnapshot () {}

  scrollToAnchorFromLocation (location) {}
}
