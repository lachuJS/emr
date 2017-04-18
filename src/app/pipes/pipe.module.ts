import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgifyPipe } from './agify.pipe';
import { GenderifyPipe } from './genderify.pipe';
import { TillDatePipe } from './till-date.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AgifyPipe,
    GenderifyPipe,
    TillDatePipe
  ],
  exports: [
    AgifyPipe,
    GenderifyPipe,
    TillDatePipe
  ]
})
export class PipeModule { }
