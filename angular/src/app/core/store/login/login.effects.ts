import {Injectable} from '@angular/core';

// import @ngrx
import {Effect, Actions, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';

// import rxjs
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs';
import {catchError, map, switchMap, tap} from 'rxjs/operators';

// router
import {Router} from '@angular/router';

// service
import {LoginService} from '../../services/login.service';



import {
  ActionTypes,
  LoginAction,
  LoginSuccessAction,
  LoginErrorAction,
} from './login.actions';

@Injectable()
export class LoginEffects {
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
          catchError(error => of(new LoginErrorAction({error: error})))
        );
      }
    ));

  @Effect({dispatch: false})
  public loginSuccess: Observable<Action> = this.actions.pipe(
    ofType(ActionTypes.LOGIN_SUCCESS),
    tap((user) => {
      this.router.navigateByUrl('/courses');
    })
  );

  @Effect({dispatch: false})
  public loginError: Observable<Action> = this.actions.pipe(
    ofType(ActionTypes.LOGIN_ERROR),
    tap((user) => {
      this.router.navigateByUrl('/login');
    })
  );

}
