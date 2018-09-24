import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CoursesComponent} from './courses.component';
import {CourseComponent} from '../course/course.component';

import {AuthGuard} from '../core/services/auth.guard';

const routes: Routes = [
  {
    path: 'courses',
    children: [
      {path: '', component: CoursesComponent},
      {path: ':id', component: CourseComponent},
      {path: 'new', component: CourseComponent}
    ],
    canActivate: [AuthGuard]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule {
}
