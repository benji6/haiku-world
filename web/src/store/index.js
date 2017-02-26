import {combineReducers, createStore} from 'redux'
import haikus from './reducers/haikus'

const reducer = combineReducers({
  haikus,
})

const enhancer = process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' && window.devToolsExtension
  ? window.devToolsExtension()
  : a => a

export default createStore(reducer, enhancer)
