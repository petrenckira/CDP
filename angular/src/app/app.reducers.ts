// reselect
// import {createSelector} from 'reselect';

// @ngrx
// import {ActionReducer, combineReducers} from '@ngrx/store';
// import {compose} from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
// import {storeFreeze} from 'ngrx-store-freeze';

// environment
// import {environment} from '../environments/environment';

import * as userState from './core/store/login/login.state';
import * as userReducer from './core/store/login/login.reducers';

import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';

export interface AppState {
  router: fromRouter.RouterReducerState;
  userFullInfo: userState.State;
}

export const reducers: ActionReducerMap<AppState> = {
  router: fromRouter.routerReducer,
  userFullInfo: userReducer.reducer
};

// export const selectAppState = createFeatureSelector<AppState>('app');

export const getUsersState = (state: AppState) => {
  console.log(state);
  return state.userFullInfo;
};

// export const getUsersState = createSelector(selectAppState, (state: AppState) => state.user);

export const getAuthenticatedUser = createSelector(getUsersState, userReducer.getAuthenticatedUser);
export const getAuthenticationError = createSelector(getUsersState, userReducer.getAuthenticationError);
export const isAuthenticated = createSelector(getUsersState, userReducer.isAuthenticated);
export const isAuthenticatedLoaded = createSelector(getUsersState, userReducer.isAuthenticatedLoaded);
export const isAuthenticationLoading = createSelector(getUsersState, userReducer.isLoading);
