import * as types from '../../types/google-maps/coords-type'

const INITIAL_STATE = {
  address: 'malaysia',
  error: null,
  coords: []
}

export default function coordsReducer (state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case types.FETCH_COORDS_SUCCESS:
      return {
        ...state,
        coords: payload.coords
      }
    case types.FETCH_COORDS_FAILURE:
      return {
        ...state,
        error: payload.error
      }
    default:
      return state
  }
}
