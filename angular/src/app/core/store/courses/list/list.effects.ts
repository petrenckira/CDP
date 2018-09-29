import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {defer, Observable, of} from 'rxjs';
import {catchError, map, mergeMap, switchMap, toArray} from 'rxjs/operators';

import {ICourse} from '../../../models/course';
import {
  AddCourse, AddCourseFail, AddCourseSuccess, GetCourse, GetCourseFail, GetCourseSuccess, ListActionTypes, Load, LoadFail,
  LoadSuccess, SaveCourse, SaveCourseFail, SaveCourseSuccess
} from './list.actions';
import {CoursesService} from '../../../../courses/services/courses.service';
import {Router} from '@angular/router';


@Injectable()

export class ListEffects {

  @Effect()
  loadCollection$: Observable<Action> = this.actions.pipe(
    ofType<Load>(ListActionTypes.LOAD),
    switchMap(() => {
        return this.coursesService.getAll().pipe(
          map((courses: ICourse[]) => {
            return new LoadSuccess(courses);
          }),
          catchError(error => of(new LoadFail(error)))
        );
      }
    )
  );

  @Effect()
  addCourse: Observable<Action> = this.actions.pipe(
    ofType<AddCourse>(ListActionTypes.ADD_COURSE),
    map(action => action.payload),
    switchMap((payload) => {
      return this.coursesService.createCourse(payload).pipe(
        map((courses: ICourse[]) => {
          this.router.navigateByUrl('/courses');
          return new AddCourseSuccess(courses);
        }),
        catchError(error => of(new AddCourseFail(error)))
      );
    })
  );


  @Effect()
  getCourse: Observable<Action> = this.actions.pipe(
    ofType<GetCourse>(ListActionTypes.GET_COURSE),
    map(action => action.payload),
    switchMap((payload) => {
      return this.coursesService.getCourse(payload).pipe(
        map((course: ICourse) => {
          return new GetCourseSuccess(course);
        }),
        catchError(error => of(new GetCourseFail(error)))
      );
    })
  );

  @Effect()
  saveCourse: Observable<Action> = this.actions.pipe(
    ofType<SaveCourse>(ListActionTypes.SAVE_COURSE),
    map(action => action.payload),
    switchMap((payload) => {
      return this.coursesService.editCourse(payload.id , payload).pipe(
        map((courses: ICourse[]) => {
          this.router.navigateByUrl('/courses');
          return new SaveCourseSuccess(courses);
        }),
        catchError(error => of(new SaveCourseFail(error)))
      );
    })
  );

  constructor(private actions: Actions, private coursesService: CoursesService, private router: Router) {
  }
}
