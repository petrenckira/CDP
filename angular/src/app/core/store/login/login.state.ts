import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';

import * as fromLogin from './login.reducers';
import * as fromRoot from './../../../app.reducers';

export interface LoginState {
  status: fromLogin.State;
}

export interface State extends fromRoot.AppState {
  login: LoginState;
}

export const reducers: ActionReducerMap<LoginState> = {
  status: fromLogin.reducer,
};
export const selectLoginState = createFeatureSelector<State, LoginState>('login');


export const selectLoginStatusState = createSelector(
  selectLoginState,
  (state: LoginState) => state.status
);

export const getAuthenticatedUser = createSelector(selectLoginStatusState, fromLogin.getAuthenticatedUser);
export const getAuthenticationError = createSelector(selectLoginStatusState, fromLogin.getAuthenticationError);
export const isAuthenticated = createSelector(selectLoginStatusState, fromLogin.isAuthenticated);
export const isAuthenticatedLoaded = createSelector(selectLoginStatusState, fromLogin.isAuthenticatedLoaded);
export const isAuthenticationLoading = createSelector(selectLoginStatusState, fromLogin.isLoading);

