import {NgModule} from '@angular/core';
import {SharedModule} from './../shared/shared.module';

import {CourseComponent} from './../course/course.component';
import {CoursesComponent} from './courses.component';
import {CoursesRoutingModule} from './courses-routing.module';

import {CoursesService} from './courses.service';


@NgModule({
  imports: [
    SharedModule,
    CoursesRoutingModule
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
