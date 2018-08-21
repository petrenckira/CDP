import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {CoursesModule} from '../courses/courses.module';

import {UserComponent} from './user.component';

import {UserService} from './user.service';

@NgModule({
  imports: [
    SharedModule,
    CoursesModule
  ],
  declarations: [UserComponent],
  providers: [UserService]
})
export class UserModule {
}
