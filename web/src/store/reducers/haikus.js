const initialState = [
  {body: 'this is not a haiku... yet', id: 0},
  {body: 'neither is this', id: 1},
  {body: '...yet', id: 2},
]

export default (state = initialState, {payload, type}) => {
  switch (type) {
    default: return state
  }
}
