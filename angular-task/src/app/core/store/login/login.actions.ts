import {Action} from '@ngrx/store';
import {IUser} from '../../models/user';

export const ActionTypes = {
  LOGIN: '[user] Authenticate',
  LOGIN_ERROR: '[user] Authentication error',
  LOGIN_SUCCESS: '[user] Authentication success',
  AUTHENTICATED: '[user] Authenticated',
  AUTHENTICATED_ERROR: '[users] Authenticated error',
  AUTHENTICATED_SUCCESS: 'users] Authenticated success'
};

export default interface ActionWithPayload<T> extends Action {
  payload: T;
}

export class LoginAction implements Action {
  public type: string = ActionTypes.LOGIN;

  constructor(public payload: {username: string, password: string}) {}
}

export class AuthenticatedAction implements Action {
  public type: string = ActionTypes.AUTHENTICATED;

  constructor(public payload?: {token?: string}) {}
}

export class AuthenticatedSuccessAction implements Action {
  public type: string = ActionTypes.AUTHENTICATED_SUCCESS;

  constructor(public payload: {authenticated: boolean, user: IUser}) {}
}

export class AuthenticatedErrorAction implements Action {
  public type: string = ActionTypes.AUTHENTICATED_ERROR;

  constructor(public payload?: any) {}
}

export class LoginErrorAction implements Action {
  public type: string = ActionTypes.LOGIN_ERROR;

  constructor(public payload?: any) {}
}

export class LoginSuccessAction implements Action {
  public type: string = ActionTypes.LOGIN_SUCCESS;

  constructor(public payload: { user: IUser }) {}
}

export type CustomActions
  =
  LoginAction
  | AuthenticatedAction
  | AuthenticatedErrorAction
  | AuthenticatedSuccessAction
  | LoginErrorAction
  | LoginErrorAction;
