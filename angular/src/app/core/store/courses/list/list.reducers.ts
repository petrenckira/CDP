import {ListActionTypes, ListActions} from './list.actions';
import {ICourse} from '../../../models/course';

export interface State {
  loaded: boolean;
  loading: boolean;
  courses: ICourse[];
}

const initialState: State = {
  loaded: false,
  loading: false,
  courses: []
};

export function reducer(state = initialState, action: ListActions): State {
  switch (action.type) {
    case ListActionTypes.LOAD: {
      return {
        ...state,
        loading: true,
      };
    }

    case ListActionTypes.LOAD_SUCCESS: {
      return {
        loaded: true,
        loading: false,
        courses: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}

export const getLoaded = (state: State) => state.loaded;

export const getLoading = (state: State) => state.loading;

export const getCourses = (state: State) => state.courses;

