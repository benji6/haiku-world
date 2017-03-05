import {combineReducers} from 'redux'
import haikus from './haikus'
import {reducer as formReducer} from 'redux-form'

export default combineReducers({
  form: formReducer,
  haikus,
})
