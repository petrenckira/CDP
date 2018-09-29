import {CustomActions, ActionTypes} from './login.actions';

import {User} from '../../models/user';

export interface State {
  authenticated: boolean;
  error?: string;
  loaded: boolean;
  loading: boolean;
  user?: User;
}

export const initialState: State = {
  authenticated: null,
  loaded: false,
  loading: false
};


export function reducer(state: State = initialState, action: CustomActions): State {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return {
        ...state,
        error: undefined,
        loading: true
      };

    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        authenticated: true,
        error: undefined,
        loading: false,
        user: action.payload.user
      };

    case ActionTypes.LOGIN_ERROR:
      return {
        ...state,
        authenticated: false,
        error: action.payload.error.message,
        loading: false
      };

    default:
      return state;
  }
}

export const isAuthenticated = (state: State) => state.authenticated;
export const isAuthenticatedLoaded = (state: State) => state.loaded;
export const getAuthenticatedUser = (state: State) => state.user;
export const getAuthenticationError = (state: State) => state.error;
export const isLoading = (state: State) => state.loading;

