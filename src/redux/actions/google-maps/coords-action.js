import * as types from '../../types/google-maps/coords-type'

export const fetchCoords = (address) => ({
  type: types.FETCH_COORDS,
  payload: { address }
})
export const fetchCoordsSuccess = (coords) => ({
  type: types.FETCH_COORDS_SUCCESS,
  payload: { coords }
})

export const fetchCoordsFailure = (error, places) => ({
  type: types.FETCH_COORDS_FAILURE,
  payload: { error, places }
})
