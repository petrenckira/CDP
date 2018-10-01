import {Component, Input, Output, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ICourse} from '../../../core/models/course';
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
  }


}
