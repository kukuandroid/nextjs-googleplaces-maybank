import { of } from 'rxjs'
import { takeUntil, mergeMap, catchError, map, tap } from 'rxjs/operators'
import { ofType } from 'redux-observable'
// import { request } from 'universal-rxjs-ajax' // because standard AjaxObservable only works in browser
import { ajax } from 'rxjs/ajax'

import * as actions from '../../actions/google-maps/coords-action'
import * as types from '../../types/google-maps/coords-type'
import { gmapGeocodingUrl, proxyUrl } from '../../../config'

export const fetchCoordsEpic = (action$, state) => {
  return action$.pipe(
    ofType(types.FETCH_COORDS),
    tap(value => console.log('Gonna fetch', value)),
    mergeMap(action =>
      ajax.getJSON(`${proxyUrl}/${gmapGeocodingUrl}address=${action.payload.address}&key=${process.env.google_maps_api_key}`).pipe(
        tap(value => console.log(value)),
        map(res => actions.fetchCoordsSuccess(res.results)),
        takeUntil(
          action$.pipe(
            tap(value => console.log('CANCELING', value)),
            ofType(types.FETCH_COORDS)
          )
        ),
        catchError((error) =>
          of(
            actions.fetchPlacesFailure(
              error,
              action.payload.isServer
            )
          )
        )
      )
    )
  )
}
