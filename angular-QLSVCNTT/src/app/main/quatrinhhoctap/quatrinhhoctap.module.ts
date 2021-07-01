import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { QuatrinhhoctapComponent } from './quatrinhhoctap/quatrinhhoctap.component';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [QuatrinhhoctapComponent, QuatrinhhoctapComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: 'quatrinhhoctap',
        component: QuatrinhhoctapComponent,
      },
  ]),
  ]
})
export class QuatrinhhoctapModule { }
