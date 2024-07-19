import Navigator from './navigator.js'
import Session from './session.js'

const session = new Session()

window.Turbo = {
  session,

  navigator: new Navigator(session),

  registerAdapter (adapter) {
    session.registerAdapter(adapter)
  },

  registerDriver (Driver) {
    session.registerDriver(new Driver(session))
  }
}

export default window.Turbo
