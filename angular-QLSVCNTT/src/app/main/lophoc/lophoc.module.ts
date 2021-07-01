import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LophocComponent } from './lophoc/lophoc.component';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [LophocComponent, LophocComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: 'Lophoc',
        component: LophocComponent,
      },
  ]),
  ]
})
export class LophocModule { }
