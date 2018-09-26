import {State, initialState} from './login.state';
import {CustomActions, ActionTypes} from './login.actions';
import {IUser} from '../../models/user';

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

    // case ActionTypes.AUTHENTICATED_ERROR:
    //   return {
    //     ...state,
    //     authenticated: false,
    //     error: action.payload.error.message,
    //     loaded: true
    //   };
    //
    // case ActionTypes.AUTHENTICATED_SUCCESS:
    //   return {
    //     ...state,
    //     authenticated: action.payload.authenticated,
    //     loaded: true,
    //     user: action.payload.user
    //   };
    default:
      return state;
  }
}

export const isAuthenticated = (state: State) => state.authenticated;
export const isAuthenticatedLoaded = (state: State) => state.loaded;
export const getAuthenticatedUser = (state: State) => state.user;
export const getAuthenticationError = (state: State) => state.error;
export const isLoading = (state: State) => state.loading;

