import {applyMiddleware} from 'redux'
import haikus from './haikus'

export default applyMiddleware(
  haikus
)
