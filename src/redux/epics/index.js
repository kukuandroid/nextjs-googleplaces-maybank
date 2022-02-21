import { combineEpics } from 'redux-observable'
import { fetchCoordsEpic } from './google-maps/coords-epic'
import { fetchPlacesEpic } from './google-maps/places-epic'
import { fetchNearbyPlacesEpic } from './google-maps/nearby-places-epic'

export const rootEpic = combineEpics(fetchPlacesEpic, fetchNearbyPlacesEpic, fetchCoordsEpic)
