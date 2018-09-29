import {Component, OnInit} from '@angular/core';
import {ICourse} from '../../../core/models/course';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as ListActions from '../../../core/store/courses/list/list.actions';
import * as fromList from '../../../core/store/courses/list/list.state';



@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Observable<ICourse[]>;

  constructor(private store: Store<fromList.State>) {
    this.courses = store.pipe(select(fromList.getListCourses));
  }

  ngOnInit() {
    this.store.dispatch(new ListActions.Load());
  }

  // removeCourse(id) {
  //   this.coursesService.deleteCourse(id).pipe().subscribe(courses =>  this.courses = courses);
  // }
}
