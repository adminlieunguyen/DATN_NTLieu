import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThanhtichComponent } from './thanhtich/thanhtich.component';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [ThanhtichComponent, ThanhtichComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: 'thanhtich',
        component: ThanhtichComponent,
      },
  ]),
  ]
})
export class ThanhtichModule { }
