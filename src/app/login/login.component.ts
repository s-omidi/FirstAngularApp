import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {AuthenticationService} from '../core/services/authentication.service';
import {Router,ActivatedRoute} from '@angular/router'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm :FormGroup;
loading=false;
submitted=false;
returnUrl:string;

  constructor(
    private fb:FormBuilder,
    private authenticationService:AuthenticationService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({    
      password: ['', Validators.required],
      email:['',Validators.required]
  });

  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }


  get f() { return this.loginForm.controls; }


  onSubmit(){
    this.submitted=true;
   debugger;
    if(this.loginForm.invalid)return;
    this.loading=true;
    var credentials=this.loginForm.value;
   debugger;
   this.authenticationService.login(credentials)
   .subscribe(
       user => {
           debugger;
           console.log("token is==============>",user.token)
           localStorage.setItem('currentUser',JSON.stringify(user));
           this.router.navigate([this.returnUrl]);
       },
       error => {
           debugger;         
           console.log("error ==>", error.error);
           this.loading = false;
       });    
  }

  logout(){    
    this.authenticationService.logout();
    this.router.navigateByUrl("/home");
  }



}
