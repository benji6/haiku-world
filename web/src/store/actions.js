const createAction = type => payload => ({payload, type})

export const HAIKUS_FETCH = 'HAIKUS_FETCH'
export const HAIKUS_SET = 'HAIKUS_SET'

export const haikusFetch = createAction(HAIKUS_FETCH)
export const haikusSet = createAction(HAIKUS_SET)
