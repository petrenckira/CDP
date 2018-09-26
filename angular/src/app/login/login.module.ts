import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {LoginComponent} from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// // @ngrx
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
//

import {reducers} from '../core/store/login/login.state';
import {LoginEffects} from '../core/store/login/login.effects';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('login', reducers),
    EffectsModule.forFeature([LoginEffects]),
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
