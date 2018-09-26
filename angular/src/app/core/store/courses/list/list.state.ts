import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';

import * as fromRoot from './../../../../app.reducers';
import * as fromList from './list.reducers';

export interface CoursesState {
  list: fromList.State;
}

export interface State extends fromRoot.AppState {
  courses: CoursesState;
}

export const reducers: ActionReducerMap<CoursesState> = {
  list: fromList.reducer,
};

export const getCoursesState = createFeatureSelector<State, CoursesState>('courses');

export const getListState = createSelector(
  getCoursesState,
  (state: CoursesState) => state.list
);

export const getListLoaded = createSelector(
  getListState,
  fromList.getLoaded
);
export const getListLoading = createSelector(
  getListState,
  fromList.getLoading
);
export const getListCourses = createSelector(
  getListState,
  fromList.getCourses
);

