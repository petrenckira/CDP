import {IUser} from '../../models/user';

export interface State {
  authenticated: boolean;
  error?: string;
  loaded: boolean;
  loading: boolean;
  user?: IUser;
}

export const initialState: State = {
  authenticated: null,
  loaded: false,
  loading: false
};

