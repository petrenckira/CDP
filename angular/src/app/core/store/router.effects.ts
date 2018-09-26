import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {Effect, Actions, ofType} from '@ngrx/effects';
import {map, tap} from 'rxjs/operators';
import * as RouterActions from './router.actions';

// @Injectable()
// export class RouterEffects {
//   @Effect({ dispatch: false })
//   navigate$ = this.actions$.pipe(
//     ofType<RouterActions.Go>(RouterActions.GO),
//       map((action: RouterActions.Go) => action.payload),
//       tap(({ path, query: queryParams, extras }) =>
//         this.router.navigate(path, { queryParams, ...extras })
//       )
//   );
@Injectable()
export class RouterEffects {
  @Effect({dispatch: false})
  navigate$ = this.actions$.pipe(
    ofType<RouterActions.Go>(RouterActions.GO),
    map((action: RouterActions.Go) => action.payload),
    tap(({path, query: queryParams, extras}) =>
      this.router.navigate(path, {queryParams, ...extras})
    ));
  //
  // @Effect({dispatch: false})
  // navigateBack$ = this.actions$.pipe(
  //   ofType<RouterActions.Back>(RouterActions.BACK),
  //   do(() => this.location.back()));


  // @Effect({dispatch: false})
  // navigateForward$ = this.actions$.pipe(
  //   ofType<RouterActions.Forward>(RouterActions.FORWARD),
  //   do(() => this.location.forward())
  // );


  constructor(private actions$: Actions,
              private router: Router,
              private location: Location) {
  }
}
