import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Route, Router} from '@angular/router';

// import rxjs
import {Observable} from 'rxjs';
import {map, take} from 'rxjs/operators';

// import @ngrx
import {Store, select} from '@ngrx/store';

// reducers
import * as fromApp from '../../app.reducers';

// router actions
import * as RouterActions from './../store/router.actions';


@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

  constructor(private store: Store<fromApp.AppState>, private  router: Router) {
  }

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(fromApp.isAuthenticated),
      map(authed => {
        if (!authed) {
          console.log('do not pass!!');
          this.router.navigate(['/login']);
          // this.store.dispatch(new  RouterActions.Go({path: ['/login']}));
          return false;
        }
        return true;
      })
    );
  }
}
