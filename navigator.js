import { uuid, expandURL } from './util.js'
import Visit from './visit.js'

export default class Navigator {
  constructor (delegate) {
    this.delegate = delegate
  }

  stop () {
    if (this.currentVisit) {
      this.currentVisit.cancel()
      delete this.currentVisit
    }
  }

  get location () {
    return new URL(window.location.href)
  }

  get adapter () {
    return this.delegate.adapter
  }

  get driver () {
    return this.delegate.driver
  }

  // # Public API used by TurboNative adapter (Turbo.navigator…)
  // startVisit()
  // locationWithActionIsSamePage()
  // restorationIdentifier
  // view

  startVisit (locatable, restorationIdentifier, options = {}) {
    this.stop()
    this.currentVisit = new Visit(this.driver, expandURL(locatable), restorationIdentifier, {
      referrer: this.location,
      ...options
    })
    this.driver.currentVisit = this.currentVisit
    this.currentVisit.start()
  }

  locationWithActionIsSamePage () {
    return false
  }

  get restorationIdentifier () {
    return this.driver?.restorationIdentifier || uuid()
  }

  get view () {
    return this.delegate.view
  }
}
