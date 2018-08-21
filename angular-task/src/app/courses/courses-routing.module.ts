import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CoursesComponent} from './courses.component';
import {CourseComponent} from '../course/course.component';
import {UserComponent} from '../user/user.component';

const routes: Routes = [
  {
    path: 'courses', //component: UserComponent,
    children: [
      {path: '', component: CoursesComponent},
      {path: ':id', component: CourseComponent},
      {path: 'new', component: CourseComponent}
    ]
  },
  {path: '', redirectTo: 'courses', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule {
}
