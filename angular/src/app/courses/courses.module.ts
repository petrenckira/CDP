import {NgModule} from '@angular/core';
import {SharedModule} from './../shared/shared.module';

import {CourseComponent} from './containers/course/course.component';
import {CoursesComponent} from './containers/courses-list/courses.component';
import {CoursesRoutingModule} from './courses-routing.module';
import {CourseFormComponent} from './components/course-form/course-form.component';

import {CoursesService} from './services/courses.service';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


import {ListEffects} from '../core/store/courses/list/list.effects';
import {reducers} from '../core/store/courses/list/list.state';


@NgModule({
  imports: [
    SharedModule,
    CoursesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('courses', reducers),
    EffectsModule.forFeature([ListEffects])
  ],
  declarations: [
    CourseComponent,
    CoursesComponent,
    CourseFormComponent
  ],
  providers: [
    CoursesService
  ]
})
export class CoursesModule {}
