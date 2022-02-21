import * as types from '../../types/google-maps/nearby-places-type'

export const fetchNearbyPlaces = (coords) => ({
  type: types.FETCH_NEARBY_PLACES,
  payload: { coords }
})
export const fetchNearbyPlacesSuccess = (response) => ({
  type: types.FETCH_NEARBY_PLACES_SUCCESS,
  payload: { response }
})

export const fetchNearbyPlacesFailure = (error, places) => ({
  type: types.FETCH_NEARBY_PLACES_FAILURE,
  payload: { error, places }
})
