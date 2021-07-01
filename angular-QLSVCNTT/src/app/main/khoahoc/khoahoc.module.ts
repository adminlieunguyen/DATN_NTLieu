import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { KhoahocComponent } from './khoahoc/khoahoc.component';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [KhoahocComponent, KhoahocComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: 'Khoahoc',
        component: KhoahocComponent,
      },
  ]),
  ]
})
export class KhoahocModule { }
