import { Component } from '@angular/core';
import {AuthenticationService} from './core/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My-First-App';

  constructor(
    private authenticationService:AuthenticationService
  ){

  }

  logOut() {
    debugger;
   
    this.authenticationService.logout();
  }
}



