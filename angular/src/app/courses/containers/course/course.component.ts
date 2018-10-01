import {Component, OnInit} from '@angular/core';
import {ICourse} from '../../../core/models/course';
import {Store, select} from '@ngrx/store';
import {Observable} from 'rxjs';

import * as fromList from '../../../core/store/courses/list/list.state';
import * as ListActions from '../../../core/store/courses/list/list.actions';
import {Router, ActivatedRoute} from '@angular/router';

import {of} from 'rxjs';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  course: Observable<ICourse>;
  id: any;

  newCourse = of({
    id: null,
    name: '',
    duration: null,
    date: null,
    description: '',
    authors: ''
  });

  constructor(private store: Store<fromList.State>,
              private route: ActivatedRoute,
              private router: Router) {
    this.getId();
    if (!this.id) {
      this.course = this.newCourse;
    }

    else {
      this.course = this.store.pipe(select(fromList.getCurrent));
    }

  }

  ngOnInit() {
    if (this.id) {
      this.store.dispatch(new ListActions.GetCourse(this.id));
    }
  }


  getId() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.id = id;
  }

  saveCourse(form) {
    if (this.id) {
      this.store.dispatch(new ListActions.SaveCourse(form.value));
    } else {
      this.store.dispatch(new ListActions.AddCourse(form.value));
    }
  }


}
