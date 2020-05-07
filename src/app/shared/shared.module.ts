import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from '../material.module';
import { SuccessDialogComponent } from './dialogs/success-dialog/success-dialog.component';
import { ErrorDialogComponent } from './dialogs/error-dialog/error-dialog.component';
import {ReactiveFormsModule}from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {IsAuthDirective} from './CustomDirective/auth.directive';
import {FavoriteComponent} from './buttonComponent/favorite/favorite.component';
import {FollowComponent} from './buttonComponent/follow/follow.component';
import {SubstringPipe} from './CustomPipe/Substring';


@NgModule({
  declarations: [SuccessDialogComponent, ErrorDialogComponent,IsAuthDirective
    , FavoriteComponent,FollowComponent,SubstringPipe],
  imports: [
    CommonModule,  
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    NgxPaginationModule

  ],
  exports:[
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    IsAuthDirective,
    FavoriteComponent,
    FollowComponent,
    
  ],
  entryComponents:[
    SuccessDialogComponent,
    ErrorDialogComponent
  ]
})
export class SharedModule { }
