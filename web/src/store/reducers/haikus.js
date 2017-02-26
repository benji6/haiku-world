import {HAIKUS_SET} from '../actions'

const initialState = []

export default (state = initialState, {payload, type}) => {
  switch (type) {
    case HAIKUS_SET: return payload
    default: return state
  }
}
