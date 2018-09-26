import {Injectable} from '@angular/core';

// import @ngrx
import {Effect, Actions, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';

// import rxjs
import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs';
// import {tap} from 'rxjs/internal/operators';
import {catchError, map, switchMap, tap} from 'rxjs/operators';

// router
import {Router} from '@angular/router';

// service
import {LoginService} from '../../services/login.service';

// import {AppState} from '../../../app.reducers';


import {
  ActionTypes,
  LoginAction,
  // AuthenticatedAction,
  LoginSuccessAction,
  // AuthenticatedSuccessAction,
  LoginErrorAction,
} from './login.actions';

@Injectable()
export class UserEffects {
  constructor(private actions: Actions,
              private router: Router,
              private userService: LoginService) {
  }

  @Effect()
  public login: Observable<Action> = this.actions.pipe(
    ofType<LoginAction>(ActionTypes.LOGIN),
    map(action => action.payload),
    switchMap(payload => {
        return this.userService.login(payload.username, payload.password).pipe(
          map(user => new LoginSuccessAction({user: user})),
          catchError (error => of(new LoginErrorAction({error: error})))
        );
      }
    ));

  @Effect({ dispatch: false })
  public loginSuccess: Observable<Action> = this.actions.pipe(
    ofType<LoginSuccessAction>(ActionTypes.LOGIN_SUCCESS),
    tap((user) => {
      this.router.navigateByUrl('/courses');
    })
  );

  // @Effect()
  // public authenticated: Observable<Action> = this.actions
  //   .pipe(
  //   ofType<AuthenticatedAction>(ActionTypes.AUTHENTICATED),
  //     map(action => action.payload),
  //     switchMap(payload => {
  //       return this.userService.authenticated().pipe(
  //         map(user => new AuthenticatedSuccessAction({authenticated: (user !== null), user: user}))
  //         // catch (error => of(new LoginErrorAction({error: error})))
  //       );
  //     }
  //   ));
}
