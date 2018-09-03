import {BrowserModule} from '@angular/platform-browser'; //move to shared module ????
import {NgModule} from '@angular/core';

/* App Root */
import {AppComponent} from './app.component';

/* Feature Modules */
import {CoursesModule} from './courses/courses.module';
import {LoginModule} from './core/login/login.module';

/* Routing Module */
import {AppRoutingModule} from './app-routing.module';

import {fakeBackendProvider} from './core/services/fake-backend';
import {JwtInterceptor} from './core/services/jwt-interceptor';
import {ErrorInterceptor} from "./core/services/error.interceptor";

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    CoursesModule,
    LoginModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
