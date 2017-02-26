import {compose, createStore} from 'redux'
import reducer from './reducers'
import middleware from './middleware'

const enhancer = compose(
  middleware,
  process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' && window.devToolsExtension
    ? window.devToolsExtension()
    : a => a
)

export default createStore(reducer, enhancer)
