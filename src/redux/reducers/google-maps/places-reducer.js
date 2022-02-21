import * as types from '../../types/google-maps/places-type'

const INITIAL_STATE = {
  search_term: 'ipoh',
  places: [],
  error: null
}

export default function placesReducer (state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case types.FETCH_PLACES_SUCCESS:
      return {
        ...state,
        places: payload.response
      }
    case types.FETCH_PLACES_FAILURE:
      return {
        ...state,
        error: payload.error
      }
    default:
      return state
  }
}
