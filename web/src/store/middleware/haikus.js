import {
  HAIKUS_FETCH,
  HAIKUS_POST,
  haikusSet,
} from '../actions'

export default store => next => action => {
  switch (action.type) {
    case HAIKUS_FETCH:
      window.setTimeout(() => store.dispatch(haikusSet([
        {body: 'this is not a haiku', id: 0},
        {body: 'neither is this', id: 1},
        {body: '...yet', id: 2},
        {body: 'this is not a haiku', id: 0},
        {body: 'neither is this', id: 1},
        {body: '...yet', id: 2},
        {body: 'this is not a haiku', id: 0},
        {body: 'neither is this', id: 1},
        {body: '...yet', id: 2},
        {body: 'this is not a haiku', id: 0},
        {body: 'neither is this', id: 1},
        {body: '...yet', id: 2},
        {body: 'this is not a haiku', id: 0},
        {body: 'neither is this', id: 1},
        {body: '...yet', id: 2},
      ])))
      next(action)
      return
    case HAIKUS_POST:
      console.log('posting: ', action.payload)
    default: next(action)
  }
}
