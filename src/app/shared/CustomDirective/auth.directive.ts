import { Directive, TemplateRef,ViewContainerRef, Input } from '@angular/core';
import {AuthenticationService} from '../../core/services/authentication.service';
@Directive({
    selector:'[showAuth]'
})


export class IsAuthDirective {
    condition:boolean;
    constructor(private templateRef: TemplateRef<any>,private viewContainerRef:ViewContainerRef,private authService:AuthenticationService) {
        //eleRef.nativeElement.style.background = 'red';
    }


    ngOnInit(){
      this.authService.isLoggedIn().subscribe(res=>{
          if(res!=null){
              debugger;
              if(  
                  (res && this.condition)
                  || (!res && !this.condition)
              )
              {

                  this.viewContainerRef.createEmbeddedView(this.templateRef);

              }
              else{

                  this.viewContainerRef.clear();

              }

          }
          else{
            this.viewContainerRef.clear();
          }
        

      })

    }
//TODO Set directive
@Input() set showAuth(condition:boolean){    
    this.condition=condition;  
}
}
