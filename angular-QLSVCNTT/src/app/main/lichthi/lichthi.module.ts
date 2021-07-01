import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LichthiComponent } from './lichthi/lichthi.component';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [LichthiComponent, LichthiComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: 'lichthi',
        component: LichthiComponent,
      },
  ]),
  ]
})
export class LichthiModule { }
