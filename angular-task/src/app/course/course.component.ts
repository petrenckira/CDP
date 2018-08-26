import {Component, OnInit} from '@angular/core';
import {ICourse} from '../models/course';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courseForm: FormGroup;
  submitted = false;

  course: ICourse = {
    id: 1,
    name: 'Course ',
    duration: 123,
    date: new Date(),
    description: 'lorem',
    authors: ['I', 'Me', 'Myself']
  };

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.courseForm = this.formBuilder.group({
      name: [this.course.name, Validators.required],
      // duration: ['', Validators.required],
      // date: ['', [Validators.required]],
      description: ['', [Validators.required]],
      // authors: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.courseForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.courseForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.courseForm.value));
  }


}
