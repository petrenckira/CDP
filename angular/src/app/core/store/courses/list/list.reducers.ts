import {ListActionTypes, ListActions} from './list.actions';
import {ICourse} from '../../../models/course';

export interface State {
  loaded: boolean;
  loading: boolean;
  courses: ICourse[];
  current: ICourse;
}

const initialState: State = {
  loaded: false,
  loading: false,
  courses: [],
  current: null
};

export function reducer(state = initialState, action: ListActions): State {
  switch (action.type) {
    case ListActionTypes.LOAD: {
      return {
        ...state,
        loading: true,
      };
    }

    case ListActionTypes.LOAD_SUCCESS:
    case ListActionTypes.ADD_COURSE_SUCCESS:
    case ListActionTypes.SAVE_COURSE_SUCCESS:
    case ListActionTypes.REMOVE_COURSE_SUCCESS: {
      return {
        ...state,
        loaded: true,
        loading: false,
        courses: action.payload
      };
    }

    case ListActionTypes.ADD_COURSE: {
      return {
        ...state,
        loading: true,
      };
    }

    case ListActionTypes.GET_COURSE: {
      return {
        ...state,
        loading: true,
      };
    }

    case ListActionTypes.GET_COURSE_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        current: action.payload
      };
    }

    case ListActionTypes.SAVE_COURSE: {
      return {
        ...state,
        loading: true,
        current: action.payload
      };
    }

    case ListActionTypes.REMOVE_COURSE: {
      return {
        ...state,
        loading: true
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

export const getCurrent = (state: State) => state.current;
