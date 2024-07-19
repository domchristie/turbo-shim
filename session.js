import PageView from './page-view.js'

export default class Session {
  registerAdapter (adapter) {
    this.adapter = adapter
  }

  registerDriver (driver) {
    (this.driver = driver).start()
  }

  allowsVisitingLocationWithAction (location, action) {
    // trigger turbo:before-visit and check for cancelation
    return true
  }

  visitProposedToLocation (location, options) {
    // extendURLWithDeprecatedProperties(location)
    if (this.allowsVisitingLocationWithAction(location, options.action)) {
      this.adapter.visitProposedToLocation(location, options)
    }
  }

  // # Public API used by TurboNative adapter
  clearCache () {}

  view = new PageView(this, document.documentElement)
}
