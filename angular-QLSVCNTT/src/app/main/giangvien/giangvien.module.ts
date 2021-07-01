import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GiangvienComponent } from './giangvien/giangvien.component';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [GiangvienComponent, GiangvienComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: 'giangvien',
        component: GiangvienComponent,
      },
  ]),
  ]
})
export class GiangvienModule { }
