import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TkbComponent } from './tkb/tkb.component';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [TkbComponent, TkbComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: 'tkb',
        component: TkbComponent,
      },
  ]),
  ]
})
export class TkbModule { }
