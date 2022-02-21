import { combineReducers } from 'redux'
import placesReducer from './google-maps/places-reducer'
import coordsReducer from './google-maps/coords-reducer'
import nearbyPlacesReducer from './google-maps/nearby-places-reducer'

const rootReducer = combineReducers({
  places: placesReducer,
  coords: coordsReducer,
  nearbyPlaces: nearbyPlacesReducer
})

export default rootReducer
