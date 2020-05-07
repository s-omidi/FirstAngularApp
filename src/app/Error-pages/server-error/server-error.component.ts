import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html',
  styleUrls: ['./server-error.component.css']
})
export class ServerErrorComponent implements OnInit {

  public reportedError:boolean;
  public errorPercentage:number=0;
  public timer: any;
  constructor() { }

  ngOnInit() {
  }


  public checkChanged=(event:any)=>{
   this.reportedError=event.checked;
   this.reportedError? this.StartSpinner():this.StopSpinner();

  }

  private StartSpinner(){
     this.timer=setInterval(()=>{
       this.errorPercentage+=1;
       if(this.errorPercentage==100){
         clearInterval(this.timer)
       }

     },300);
  }
  private StopSpinner(){
     clearInterval(this.timer);
     this.errorPercentage=0;
  }
}
