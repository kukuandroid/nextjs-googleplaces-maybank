import * as types from '../../types/google-maps/places-type'

export const fetchPlaces = (searchTerm) => ({
  type: types.FETCH_PLACES,
  payload: { searchTerm }
})
export const fetchPlacesSuccess = (response) => ({
  type: types.FETCH_PLACES_SUCCESS,
  payload: { response }
})

export const fetchPlacesFailure = (error, places) => ({
  type: types.FETCH_PLACES_FAILURE,
  payload: { error, places }
})
