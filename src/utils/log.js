import store from '@/store'

export const Log = {
  capsule: function(title, info) {

  },
  info: function(msg) {
    store.dispatch('log/info', msg)
  },
  debug: function(msg) {
    store.dispatch('log/debug', msg)
  },
  warning: function(msg) {
    store.dispatch('log/warning', msg)
  },
  error: function(msg) {
    store.dispatch('log/error', msg)
  }
}
export default Log
