import { Injectable } from '@angular/core';
import {RepositoryService} from './repository.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private repository:RepositoryService) { }
 
register(credentials:any) { 
 var body={"user":credentials};
  console.log(body);  
   return this.repository.create("users",body);
}





}
