import { uuid } from './util.js'

export default class Visit {
  started = false

  constructor (delegate, location, restorationIdentifier, options = {}) {
    this.delegate = delegate
    this.location = location
    this.restorationIdentifier = restorationIdentifier || uuid()
    this.action = options.action
  }

  start () {
    console.log('Visit#start')
    if (!this.started) {
      this.adapter.visitStarted(this)
      this.delegate.visitStarted(this)
      this.started = true
    }
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
    console.log('Visit#issueRequest')
    this.delegate.issueRequest(this)
  }

  changeHistory () {
    console.log('Visit#changeHistory')
    this.delegate.changeHistory(this)
  }

  loadCachedSnapshot () {
    console.log('Visit#loadCachedSnapshot')
    this.delegate.loadCachedSnapshot(this)
  }

  loadResponse () {
    console.log('Visit#loadResponse')
    this.delegate.loadResponse(this)
  }

  cancel () {
    console.log('Visit#cancel')
    this.delegate.cancelVisit(this)
  }

  hasCachedSnapshot () {
    console.log('Visit#hasCachedSnapshot')
    return this.delegate.hasCachedSnapshot(this)
  }

  get isPageRefresh () {
    console.log('Visit#isPageRefresh')
    this.delegate.isPageRefresh(this)
  }
}
