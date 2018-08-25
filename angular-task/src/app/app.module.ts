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

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    CoursesModule,
    LoginModule,
    AppRoutingModule
  ],
  providers: [],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
