// reselect
import {createSelector} from 'reselect';

// @ngrx
import {ActionReducer, combineReducers} from '@ngrx/store';
import {compose} from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import {storeFreeze} from 'ngrx-store-freeze';

// environment
import {environment} from '../environments/environment';

import * as userState from './core/store/login/login.state';
import * as userReducer from './core/store/login/login.reducers';

export interface State {
  router: fromRouter.RouterReducerState;
  user: userState.State;
}

export const reducers = {
  router: fromRouter.routerReducer,
  user: userReducer.reducer
};

// development reducer includes storeFreeze to prevent state from being mutated
// const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
//
// // production reducer
// const productionReducer: ActionReducer<State> = combineReducers(reducers);
//
// export function reducer(state: any, action: any) {
//   if (environment.production) {
//     return productionReducer(state, action);
//   } else {
//     return developmentReducer(state, action);
//   }
// }

export const getUsersState = (state: State) => state.user;

export const getAuthenticatedUser = createSelector(getUsersState, userReducer.getAuthenticatedUser);
export const getAuthenticationError = createSelector(getUsersState, userReducer.getAuthenticationError);
export const isAuthenticated = createSelector(getUsersState, userReducer.isAuthenticated);
export const isAuthenticatedLoaded = createSelector(getUsersState, userReducer.isAuthenticatedLoaded);
export const isAuthenticationLoading = createSelector(getUsersState, userReducer.isLoading);
