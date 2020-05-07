import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../core/services/authentication.service'
import { Observable, from } from 'rxjs';
import{Router} from '@angular/router'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService:AuthenticationService,private router:Router) { 
  
  }

  ngOnInit() {
   
  }

  logout(){    
    this.authService.logout();
    this.router.navigateByUrl("/home");
  }

}
