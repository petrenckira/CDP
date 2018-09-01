import { Component, OnInit } from '@angular/core';
import {CoursesService} from './courses.service';
import {ICourse} from '../models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Array<ICourse> = [];

  constructor(private coursesService: CoursesService) {
  }

  ngOnInit() {
    this.coursesService.getAll().pipe().subscribe((courses) => {
      this.courses = courses;
      console.log(this.courses);
    });
  }
}
