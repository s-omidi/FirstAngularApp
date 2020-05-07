import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about.component';
import {ListComponent} from './list/list.component';
import {UpdateComponent} from './update/update.component'

const routes: Routes = [
  {path:'',component:AboutComponent},
  {path:'about-list',component:ListComponent},
  {path:'about-update',component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
