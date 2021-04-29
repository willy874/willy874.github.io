import beforeTrigger from './beforeTrigger'
import triggered from './triggered'

const log = []
const EventCollection = new Map()
const addEventListenerNative = EventTarget.prototype.addEventListener
const removeEventListenerNative = EventTarget.prototype.removeEventListener

export const handleEvent = (listener, options) => {
  return function (e) {
    log.push(e)
    new Promise(resolve => {
      resolve(beforeTrigger.call(this, e, options))
    })
      .then(res => {
        e.beforeTriggerResult = res
        e.triggeredResult = listener.call(this, e)
        triggered(e, options)
      })
      .catch(() => {
        if (options && options.triggerError) {
          options.triggerError.call(this, e, options)
        }
      })
  }
}

EventTarget.prototype.addEventListener = function (type, listener, options) {
  const event = handleEvent(listener, options)
  if (options && options.key) {
    EventCollection.set(options.key, event)
  } else {
    EventCollection.set(event, event)
  }
  addEventListenerNative.apply(this, [type, event, options])
}
EventTarget.prototype.removeEventListener = function (type, listener, options) {
  const getEvent = () => {
    if (options && options.key) {
      return EventCollection.get(options.key)
    } else {
      return EventCollection.get(listener)
    }
  }
  removeEventListenerNative.apply(this, [type, getEvent()])
}

export function useEventCollection() {
  return EventCollection
}

export const getEventLog = () => {
  return log
}
