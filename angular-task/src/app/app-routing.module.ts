import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './login/login.component';
// import {CoursesModule} from "./courses/courses.module";

export const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'courses', loadChildren: './courses/courses.module#CoursesModule'},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule {}
