import {Component, OnInit} from '@angular/core';
import {ICourse} from '../core/models/course';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CoursesService} from '../courses/courses.service';
import {DatePipe} from '@angular/common';
import {first} from "rxjs/operators";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courseForm: FormGroup;
  submitted = false;
  loading = false;
  returnUrl: string;
  id: number;
  error = '';

  course: ICourse = {
    id: null,
    name: '',
    duration: null,
    date: null,
    description: '',
    authors: ''
  };

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private coursesService: CoursesService) {
  }

  ngOnInit() {
    this.getId();
    this.getCourse();
    this.courseForm = this.formBuilder.group({
      name: [this.course.name, Validators.required],
      duration: [this.course.duration, Validators.required],
      date: [this.course.date, [Validators.required]],
      description: [this.course.description, [Validators.required]],
      // authors: [this.course.authors, Validators.required]
    });
  }

  get f() {
    return this.courseForm.controls;
  }

  getCourse() {
    if (!this.id) {
      return;
    }
    this.coursesService.getCourse(this.id)
      .subscribe(course => {
        this.course = course;
        this.courseForm = this.formBuilder.group({
          id: [this.course.id],
          name: [this.course.name, Validators.required],
          duration: [this.course.duration, Validators.required],
          date: [this.course.date, [Validators.required]],
          description: [this.course.description, [Validators.required]],
          // authors: [this.course.authors, Validators.required]
        });
      });
  }

  getId() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.id = id;
  }

  onSubmit() {
    this.submitted = true;

    if (this.courseForm.invalid) {
      return;
    }
    if (this.id) {
      this.coursesService.editCourse(this.id, this.courseForm.value)
        .pipe(first())
        .subscribe(
          data => {
            console.log(data);
            this.router.navigate([this.returnUrl]);
          },
          error => {
            this.error = error;
            this.loading = false;
          });
      return;
    }

    this.coursesService.createCourse(this.courseForm.value)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.error = error;
          this.loading = false;
        });

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.courseForm.value));
  }


}
