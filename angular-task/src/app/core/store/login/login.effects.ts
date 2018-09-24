import {Injectable} from '@angular/core';

// import @ngrx
import {Effect, Actions, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';

// import rxjs
import {Observable} from 'rxjs/Observable';
import {catchError, map, switchMap} from 'rxjs/operators';

import ''

import {LoginService} from '../../services/login.service';

import {
  ActionTypes, LoginSuccessAction,
  LoginErrorAction
} from './login.actions';

@Injectable()
export class UserEffects {
  constructor(private actions: Actions,
              private userService: LoginService) {
  }

  @Effect()
  public Login: Observable<Action> = this.actions.pipe(
    ofType(ActionTypes.LOGIN),
    switchMap(payload => {
        return this.userService.login(payload.username, payload.password).pipe(
          map(user => new LoginSuccessAction({user: user}))
          // catch(error => Observable.of(new LoginErrorAction({error: error})))
        );
      }
    ));
}
