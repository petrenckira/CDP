import {NgModule} from '@angular/core';
import {SharedModule} from './../shared/shared.module';

import {CourseComponent} from './../course/course.component';
import {CoursesComponent} from './courses.component';
import {CoursesRoutingModule} from './courses-routing.module';

import {CoursesService} from './courses.service';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';


@NgModule({
  imports: [
    SharedModule,
    CoursesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    CourseComponent,
    CoursesComponent
  ],
  providers: [
    CoursesService
  ]
})
export class CoursesModule {}
