import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

// import rxjs
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

// import @ngrx
import {Store, select} from '@ngrx/store';

// reducers
import * as fromLogin from '../store/login/login.state';




@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

  constructor(private store: Store<fromLogin.State>, private  router: Router) {
  }

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(fromLogin.isAuthenticated),
      map(authed => {
        if (!authed) {
          console.log('do not pass!!');
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      })
    );
  }
}
