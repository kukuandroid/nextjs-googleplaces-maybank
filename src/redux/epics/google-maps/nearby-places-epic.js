import { of } from 'rxjs'
import { takeUntil, mergeMap, catchError, map, tap } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import { ajax } from 'rxjs/ajax'

import * as actions from '../../actions/google-maps/nearby-places-action'
import * as types from '../../types/google-maps/nearby-places-type'
import { gmapPlacesNearbyUrl, proxyUrl } from '../../../config'

export const fetchNearbyPlacesEpic = (action$) => {
  return action$.pipe(
    ofType(types.FETCH_NEARBY_PLACES),
    tap(value => console.log('fetching ...', value)),
    mergeMap(action =>
      ajax.getJSON(`${proxyUrl}/${gmapPlacesNearbyUrl}location=${action.payload.coords.latitude}%2C${action.payload.coords.longitude}&radius=1500&key=${process.env.google_maps_api_key}`).pipe(
        tap(value => console.log(value)),
        map(res => actions.fetchNearbyPlacesSuccess(res.results)),
        takeUntil(
          action$.pipe(
            tap(value => console.log('CANCELING', value)),
            ofType(types.FETCH_NEARBY_PLACES)
          )
        ),
        catchError((error) =>
          of(
            actions.fetchNearbyPlacesFailure(
              error,
              action.payload.isServer
            )
          )
        )
      )
    )
  )
}
