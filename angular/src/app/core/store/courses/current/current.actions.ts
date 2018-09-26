// import {Action} from '@ngrx/store';
// // import {IUser} from '../../models/user';
// import {ICourse} from '../../models/course';
// import {LoginAction, LoginErrorAction, LoginSuccessAction} from '../login/login.actions';
//
//
// export const ActionTypes = {
//   GET_COURSES: '[courses] Get Courses',
//   GET_COURSES_ERROR: '[courses] Get Courses error',
//   GET_COURSES_SUCCESS: '[courses] Get Courses success',
// };
//
//
// export class GetCoursesAction implements Action {
//   public type: string = ActionTypes.GET_COURSES;
//
//   // constructor(public payload: { username: string, password: string }) {
//   // }
// }
//
// export class GetCoursesErrorAction implements Action {
//   public type: string = ActionTypes.GET_COURSES_ERROR;
//
//   constructor(public payload?: any) {
//   }
// }
//
// export class GetCoursesSuccessAction implements Action {
//   public type: string = ActionTypes.GET_COURSES_SUCCESS;
//
//   constructor(public payload: { courses: ICourse }) {
//   }
// }
//
// export type CoursesActions
//   =
//   GetCoursesAction
//   // | AuthenticatedAction
//   // | AuthenticatedErrorAction
//   // | AuthenticatedSuccessAction
//   | GetCoursesErrorAction
//   | GetCoursesSuccessAction;
