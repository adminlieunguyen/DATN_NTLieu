import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChuyennganhComponent } from './chuyennganh/chuyennganh.component';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [ChuyennganhComponent, ChuyennganhComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: 'chuyennganh',
        component: ChuyennganhComponent,
      },
  ]),
  ]
})
export class ChuyennganhModule { }
