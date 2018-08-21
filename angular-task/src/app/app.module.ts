import {BrowserModule} from '@angular/platform-browser'; //move to shared module ????
import {NgModule} from '@angular/core';

/* App Root */
import {AppComponent} from './app.component';

import {LoginComponent} from './login/login.component';

/* Feature Modules */
import {UserModule} from './user/user.module';
import {CoursesModule} from './courses/courses.module';

// Shared Module
 import {SharedModule} from './shared/shared.module';

/* Routing Module */
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    UserModule,
    CoursesModule,
    AppRoutingModule
  ],
  providers: [],
  declarations: [
    AppComponent,
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
