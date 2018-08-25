import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from './material.module';

import {HeaderComponent} from '../common/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [HeaderComponent],
  exports:[CommonModule,MaterialModule, HeaderComponent]
})
export class SharedModule { }
