import {Action} from '@ngrx/store';
import {ICourse} from '../../../models/course';

export enum ListActionTypes {
  ADD_COURSE = '[List] Add Course',
  ADD_COURSE_SUCCESS = '[List] Add Course Success',
  ADD_COURSE_FAIL = '[List] Add Course Fail',

  REMOVE_COURSE = '[List] Remove Course',
  REMOVE_COURSE_SUCCESS = '[List] Remove Course Success',
  REMOVE_COURSE_FAIL = '[List] Remove Course Fail',

  LOAD = '[List] Load',
  LOAD_SUCCESS = '[List] Load Success',
  LOAD_FAIL = '[List] Load Fail',

  GET_COURSE = '[List] Get Course',
  GET_COURSE_SUCCESS = '[List] Get Course Success',
  GET_COURSE_FAIL = '[List] Get Course Fail',

  SAVE_COURSE = '[List] Save Course',
  SAVE_COURSE_SUCCESS = '[List] Save Course Success',
  SAVE_COURSE_FAIL = '[List] Save Course Fail'
}

export class AddCourse implements Action {
  readonly type = ListActionTypes.ADD_COURSE;

  constructor(public payload: ICourse) {
  }
}

export class AddCourseSuccess implements Action {
  readonly type = ListActionTypes.ADD_COURSE_SUCCESS;

  constructor(public payload: ICourse[]) {
  }
}

export class AddCourseFail implements Action {
  readonly type = ListActionTypes.ADD_COURSE_FAIL;

  constructor(public payload: any) {
  }
}

export class RemoveCourse implements Action {
  readonly type = ListActionTypes.REMOVE_COURSE;

  constructor(public payload: any) {
  }
}

export class RemoveCourseSuccess implements Action {
  readonly type = ListActionTypes.REMOVE_COURSE_SUCCESS;

  constructor(public payload: ICourse[]) {
  }
}

export class RemoveCourseFail implements Action {
  readonly type = ListActionTypes.REMOVE_COURSE_FAIL;

  constructor(public payload: any) {
  }
}

export class Load implements Action {
  readonly type = ListActionTypes.LOAD;
}

export class LoadSuccess implements Action {
  readonly type = ListActionTypes.LOAD_SUCCESS;

  constructor(public payload: ICourse[]) {
  }
}

export class LoadFail implements Action {
  readonly type = ListActionTypes.LOAD_FAIL;

  constructor(public payload: any) {
  }
}

export class GetCourse implements Action {
  readonly type = ListActionTypes.GET_COURSE;

  constructor(public payload: any) {
  }
}

export class GetCourseSuccess implements Action {
  readonly type = ListActionTypes.GET_COURSE_SUCCESS;

  constructor(public payload: ICourse) {
  }
}

export class GetCourseFail implements Action {
  readonly type = ListActionTypes.GET_COURSE_FAIL;

  constructor(public payload: any) {
  }
}

export class SaveCourse implements Action {
  readonly type = ListActionTypes.SAVE_COURSE;

  constructor(public payload: ICourse) {
  }
}

export class SaveCourseSuccess implements Action {
  readonly type = ListActionTypes.SAVE_COURSE_SUCCESS;

  constructor(public payload: ICourse[]) {
  }
}

export class SaveCourseFail implements Action {
  readonly type = ListActionTypes.SAVE_COURSE_FAIL;

  constructor(public payload: any) {
  }
}

export type ListActions =
  | AddCourse
  | AddCourseSuccess
  | AddCourseFail
  | RemoveCourse
  | RemoveCourseSuccess
  | RemoveCourseFail
  | Load
  | LoadSuccess
  | LoadFail
  | GetCourse
  | GetCourseSuccess
  | GetCourseFail
  | SaveCourse
  | SaveCourseSuccess
  | SaveCourseFail;
