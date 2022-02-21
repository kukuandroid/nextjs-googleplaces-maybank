import { of } from 'rxjs'
import { takeUntil, mergeMap, catchError, map, tap } from 'rxjs/operators'
import { ofType } from 'redux-observable'
// import { request } from 'universal-rxjs-ajax' // because standard AjaxObservable only works in browser
import { ajax } from 'rxjs/ajax'

import * as actions from '../../actions/google-maps/places-action'
import * as types from '../../types/google-maps/places-type'
import { gmapPlacesAutoCompleteUrl, proxyUrl } from '../../../config'

// export const fetchPlaceEpic = (action$, state$) =>
//   action$.pipe(
//     ofType(types.START_FETCHING_PLACESS),
//     mergeMap((action) => {
//       return interval(1000).pipe(
//         map((x) => actions.fetchPlaces()),
//         takeUntil(
//           action$.pipe(ofType(types.STOP_FETCHING_USERS, types.FETCH_USER_FAILURE))
//         )
//       )
//     })
//   )

export const fetchPlacesEpic = (action$, state) => {
  return action$.pipe(
    ofType(types.FETCH_PLACES),
    tap(value => console.log('Gonna fetch', value)),
    mergeMap(action =>
      ajax.getJSON(`${proxyUrl}/${gmapPlacesAutoCompleteUrl}input=${action.payload.searchTerm}&types=geocode&key=${process.env.google_maps_api_key}`).pipe(
        tap(value => console.log(value)),
        map(res => actions.fetchPlacesSuccess(res.predictions)),
        takeUntil(
          action$.pipe(
            tap(value => console.log('CANCELING', value)),
            ofType(types.FETCH_PLACES)
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
