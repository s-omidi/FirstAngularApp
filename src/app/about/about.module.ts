import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AboutComponent, ListComponent, UpdateComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule
  ]
})
export class AboutModule { }
