import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgifyPipe } from './agify.pipe';
import { GenderifyPipe } from './genderify.pipe';
import { ExaminationPipe } from './examination.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AgifyPipe,
    GenderifyPipe,
    ExaminationPipe,
  ],
  exports: [
    AgifyPipe,
    GenderifyPipe,
    ExaminationPipe
  ]
})
export class PipeModule { }
