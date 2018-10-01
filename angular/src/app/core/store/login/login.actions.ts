import {Action} from '@ngrx/store';
import {User} from '../../models/user';

export const ActionTypes = {
  LOGIN: '[user] Authenticate',
  LOGIN_ERROR: '[user] Authentication error',
  LOGIN_SUCCESS: '[user] Authentication success'
};

export class LoginAction implements Action {
  public type: string = ActionTypes.LOGIN;

  constructor(public payload: { username: string, password: string }) {
  }
}

export class LoginErrorAction implements Action {
  public type: string = ActionTypes.LOGIN_ERROR;

  constructor(public payload?: any) {
  }
}

export class LoginSuccessAction implements Action {
  public type: string = ActionTypes.LOGIN_SUCCESS;

  constructor(public payload: { user: User }) {
  }
}

export type CustomActions
  =
  LoginAction
  | LoginErrorAction
  | LoginSuccessAction;
