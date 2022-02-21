import * as types from '../../types/google-maps/nearby-places-type'

const INITIAL_STATE = {
  coords: {},
  error: null
}

export default function nearbyPlacesReducer (state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case types.FETCH_NEARBY_PLACES_SUCCESS:
      return {
        ...state,
        nearbyPlaces: payload.response
      }
    case types.FETCH_NEARBY_PLACES_FAILURE:
      return {
        ...state,
        error: payload.error
      }
    default:
      return state
  }
}
