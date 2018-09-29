import {Component, Input, Output, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import * as fromList from '../../../core/store/courses/list/list.state';
import {Store} from '@ngrx/store';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as ListActions from '../../../core/store/courses/list/list.actions';
import {Observable, of, Subscription} from 'rxjs';
import {ICourse} from '../../../core/models/course';
import {Router, ActivatedRoute} from '@angular/router';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit, OnChanges {
  @Input() course: ICourse;
  @Output() formReady = new EventEmitter<FormGroup>();

  courseForm: FormGroup;
  loading = false;
  returnUrl = '/courses';
  error = '';

  newCourse: ICourse = {
    id: null,
    name: '',
    duration: null,
    date: null,
    description: '',
    authors: ''
  };

  constructor(private formBuilder: FormBuilder) {
    this.setValues(this.newCourse);

  }

  ngOnInit() {
    this.courseForm.patchValue(this.course);
  }


  get f() {
    return this.courseForm.controls;
  }

  setValues(course) {
    this.courseForm = this.formBuilder.group({
      id: [course.id],
      name: [course.name, Validators.required],
      duration: [course.duration, Validators.required],
      date: [course.date, [Validators.required]],
      description: [course.description, [Validators.required]],
      // authors: [this.course.authors, Validators.required]
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.course && !changes.course.firstChange) {
      this.courseForm.patchValue(this.course);
    }
  }


  onSubmit() {
    if (this.courseForm.invalid) {
      return;
    }

    this.formReady.emit(this.courseForm);

    // if (this.id) {
    //   this.coursesService.editCourse(this.id, this.courseForm.value)
    //     .pipe(first())
    //     .subscribe(
    //       data => {
    //         this.router.navigate([this.returnUrl]);
    //       },
    //       error => {
    //         this.error = error;
    //         this.loading = false;
    //       });
    //   return;
    // }

    // this.coursesService.createCourse(this.courseForm.value)
    //   .pipe(first())
    //   .subscribe(
    //     data => {
    //       this.router.navigate([this.returnUrl]);
    //     },
    //     error => {
    //       this.error = error;
    //       this.loading = false;
    //     });

    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.courseForm.value));
  }


}
