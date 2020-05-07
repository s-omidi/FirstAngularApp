import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpParams} from '@angular/common/http';
import {EnviromentUrlService} from '../../shared/services/enviroment-url.service';
import {AuthenticationService} from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(private http:HttpClient,private envUrl:EnviromentUrlService,private authService:AuthenticationService) { }

  public getAllData(route:string,parameters:any){    
      let params = new HttpParams();
      debugger;
       Object.keys(parameters).sort().forEach(key => {
       const value = parameters[key];
       if (value !== null) {
         params = params.set(key, value.toString());
        }
     });
     debugger;
    var data= this.http.get(this.createCompleteRoute(route,this.envUrl.Url),{params:params,headers:this.generateHeaders()}) 
      return data;
  }

  public getData(route:string){    
  var data= this.http.get(this.createCompleteRoute(route,this.envUrl.Url)) 
   return data;
}

  public create(route: string, body: any) { 
     return this.http.post(this.createCompleteRoute(route,this.envUrl.Url), body,{headers:this.generateHeaders()});  
  }

  public update(route: string, body: any){
 
    var data=this.http.put(this.createCompleteRoute(route, this.envUrl.Url), body);
    return data;
  }

  public delete(route: string){
  
   let data= this.http.delete(this.createCompleteRoute(route, this.envUrl.Url),{headers:this.generateHeaders()}); 
    
   return data;
  }

  private  createCompleteRoute(route:string,envAddress:string){
    let completeAddress=`${envAddress}/${route}`;
    debugger;   
    return completeAddress;
  }
  private generateHeaders():HttpHeaders {
    const headerConfig={
      "access-control-allow-origin": "*",
      "cache-control": "no-cache",
      "content-encoding": "gzip",
      "Content-Type":"application/json"
    }  
    let token=this.authService.GetToken();    
      if(!!token){
        headerConfig['Authorization']=`Token ${token}`;      
      }
      debugger;
    return new HttpHeaders(headerConfig);   
  
  }


}
