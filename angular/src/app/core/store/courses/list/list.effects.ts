import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {defer, Observable, of} from 'rxjs';
import {catchError, map, mergeMap, switchMap, toArray} from 'rxjs/operators';

import {ICourse} from '../../../models/course';
import {ListActionTypes, Load, LoadFail, LoadSuccess} from './list.actions';
import {CoursesService} from '../../../../courses/courses.service';


@Injectable()

export class ListEffects {

  @Effect()
  loadCollection$: Observable<Action> = this.actions.pipe(
    ofType<Load>(ListActionTypes.LOAD),
    switchMap(() => {
        return this.coursesService.getAll().pipe(
          map((courses: ICourse[]) => {
            console.log(courses);
            return new LoadSuccess(courses);
          }),
          catchError(error => of(new LoadFail(error)))
        );
      }
    )
  );

  constructor(private actions: Actions, private coursesService: CoursesService) {
  }
}
