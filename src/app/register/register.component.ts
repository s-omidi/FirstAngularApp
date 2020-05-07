import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {UserService} from '../core/services/user.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  loading = false;
  submitted = false;
  constructor(
    private fb:FormBuilder,
    private userService:UserService
    
  ) { }

  ngOnInit() {
    this.registerForm=this.fb.group({
      email:['',Validators.required],   
      username:['',Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }
  get f() { return this.registerForm.controls; }
  onSubmit(){
    this.submitted = true;
    debugger;
          if (this.registerForm.invalid) {
               return;
          }
          debugger;
          this.loading = true;
          this.userService.register(this.registerForm.value).subscribe(user=>{
            debugger;
            console.log(user);
          },
          error=>{
            this.loading=false;
          console.log(error.error.value)
          }
          )
  }

}
