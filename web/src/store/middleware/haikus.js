import {
  HAIKUS_FETCH,
  HAIKUS_POST,
  haikusSet,
} from '../actions'
import {apiUri} from '../../config'

export default store => next => action => {
  switch (action.type) {
    case HAIKUS_FETCH:
      next(action)
      fetch(`${apiUri}/haikus`)
        .then(res => {
          if (res.status >= 200 && res.status < 300) return res.json()
          else throw new Error('bad status code on /haikus GET', res.status)
        })
        .then(data => store.dispatch(haikusSet(data)))
        .catch(console.error) // eslint-disable-line no-console
      return
    case HAIKUS_POST:
      console.log('posting: ', action.payload)
    default: next(action)
  }
}
