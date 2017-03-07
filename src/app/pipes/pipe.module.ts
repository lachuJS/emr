import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgifyPipe } from './agify.pipe';
import { GenderifyPipe } from './genderify.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AgifyPipe,
    GenderifyPipe
  ],
  exports: [
    AgifyPipe,
    GenderifyPipe
  ]
})
export class PipeModule { }
