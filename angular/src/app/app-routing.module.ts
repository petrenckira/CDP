import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './login/login.component';
// import {CoursesModule} from "./courses/courses.module";

import {AuthGuard} from './core/services/auth.guard';

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'courses', loadChildren: './courses/courses.module#CoursesModule'},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule {
}
