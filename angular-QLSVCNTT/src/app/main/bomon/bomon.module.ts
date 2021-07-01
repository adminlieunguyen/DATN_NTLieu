import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BomonComponent } from './bomon/bomon.component';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [BomonComponent, BomonComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: 'bomon',
        component: BomonComponent,
      },
  ]),
  ]
})
export class BomonModule { }
