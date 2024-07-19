import { uuid } from './util.js'

export default class Visit {
  constructor (delegate, location, restorationIdentifier, options = {}) {
    this.delegate = delegate
    this.location = location
    this.restorationIdentifier = restorationIdentifier
    this.action = options.action
  }

  start () {
    this.adapter.visitStarted(this)
  }

  get adapter () {
    return this.delegate.adapter
  }

  // # Public API used by TurboNative adapter
  // identifier
  // issueRequest() // TurboNative#visitStarted
  // changeHistory() // TurboNative#visitStarted
  // loadCachedSnapshot() // TurboNative#visitStarted
  // loadResponse()
  // cancel()
  // hasCachedSnapshot()
  // isPageRefresh
  // restorationIdentifier

  identifier = uuid()

  issueRequest () {
    this.delegate.issueRequest(this)
  }

  changeHistory () {
    this.delegate.changeHistory(this)
  }

  loadCachedSnapshot () {
    this.delegate.loadCachedSnapshot(this)
  }

  loadResponse () {
    this.delegate.loadResponse(this)
  }

  cancel () {
    this.delegate.cancelVisit(this)
  }

  hasCachedSnapshot () {
    this.delegate.hasCachedSnapshot(this)
    return false
  }

  get isPageRefresh () {
    this.delegate.isPageRefresh(this)
    return false
  }
}
