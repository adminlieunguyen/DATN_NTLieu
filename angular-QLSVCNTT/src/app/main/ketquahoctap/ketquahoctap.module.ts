import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ketquahoctapComponent } from './ketquahoctap/ketquahoctap.component';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [ketquahoctapComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: 'ketquahoctap',
        component: ketquahoctapComponent,
      },
  ]),
  ]
})
export class KetquahoctapModule { }
