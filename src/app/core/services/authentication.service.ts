import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, isPlatformServer, DOCUMENT  } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/User';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;;
  private isLoginSubject:BehaviorSubject<boolean>;
  

  constructor(private http:HttpClient,@Inject(PLATFORM_ID) private platformId: any, @Inject(DOCUMENT) private document: Document) { 
    if (isPlatformBrowser(this.platformId)) {
      this.currentUserSubject=new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser=this.currentUserSubject.asObservable();
      this.isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());
    }
   
   }

  public get currentUserValue():User{
    return this.currentUserSubject.value;
  }

  login(credentials: any) {
     return this.http.post<any>(`https://conduit.productionready.io/api/users/login`, {"user":credentials})
            .pipe(map(user=>{
               if(user && user.user.token){
                if (isPlatformBrowser(this.platformId)) {
                  localStorage.setItem('currentUser',JSON.stringify(user));
                 localStorage.setItem('token', user.user.token);    
                }
                       
                 this.isLoginSubject.next(true);
                 this.currentUserSubject.next(user.user);
               }
               return user.user;
            }))    
}

isLoggedIn() : Observable<boolean> {
  return this.isLoginSubject.asObservable();
}

private hasToken() : boolean {
  if (isPlatformBrowser(this.platformId)) {
    return !!localStorage.getItem('token');

  }
}

public GetToken():string{
  if (isPlatformBrowser(this.platformId)) {
    return localStorage.getItem('token');
  }

}

logout() { 
  if (isPlatformBrowser(this.platformId)) {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    localStorage.removeItem('token');
    this.isLoginSubject.next(false);
  }
 
}






}
