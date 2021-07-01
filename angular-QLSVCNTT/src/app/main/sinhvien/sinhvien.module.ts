import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SinhvienComponent } from './sinhvien/sinhvien.component';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [SinhvienComponent, SinhvienComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: 'sinhvien',
        component: SinhvienComponent,
      },
  ]),
  ]
})
export class SinhvienModule { }
