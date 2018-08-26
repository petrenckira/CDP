import {BrowserModule} from '@angular/platform-browser'; //move to shared module ????
import {NgModule} from '@angular/core';

/* App Root */
import {AppComponent} from './app.component';

/* Feature Modules */
import {CoursesModule} from './courses/courses.module';
import {LoginModule} from './login/login.module';

// Shared Module
import {SharedModule} from './shared/shared.module';

/* Routing Module */
import {AppRoutingModule} from './app-routing.module';

import {FakeBackendInterceptor} from './helpers/fake-backend';
import {JwtInterceptor} from './helpers/jwt-interceptor';

// import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    CoursesModule,
    LoginModule,
    // ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    FakeBackendInterceptor
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
