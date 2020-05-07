import { Injectable } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog'
import {ErrorDialogComponent} from '../../shared/dialogs/error-dialog/error-dialog.component'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  private errorMessage:string='';
  public dialogConfig;
  constructor(private router:Router,private dialog:MatDialog) { }

   public HandleError(error: HttpErrorResponse)
  {
    
    if(error.status==400) this.Handle400error(error);
    if(error.status==500)  this.Handle500error(error)
    else  this.CustomeError(error);

   }

   private Handle400error(error: HttpErrorResponse){
     this.CreateMessage(error)
    this.router.navigate(['/400']);
    
   }
   private Handle500error(error: HttpErrorResponse){
    this.CreateMessage(error)
     this.router.navigate(['/500']);

  }
  private CustomeError(error:HttpErrorResponse){
    this.CreateMessage(error);
    this.dialogConfig.data={
     'errormessage':this.errorMessage
    };
    this.dialog.open(ErrorDialogComponent,this.dialogConfig)
  }
  private CreateMessage(error:HttpErrorResponse){
     this.errorMessage=error.error?error.error:error.statusText;
  }
}
