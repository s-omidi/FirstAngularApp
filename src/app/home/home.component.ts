import { Component, OnInit } from '@angular/core';
import { Subscription,Observable, Subject, BehaviorSubject  } from 'rxjs';
import {Router} from '@angular/router';
import { AuthenticationService} from '../core/services/authentication.service';
import {User} from '../core/models/User';
import {RepositoryService} from '../core/services/repository.service';
import {ArticleListConfig} from '../core/models/ArticleListConfig';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 // @ViewChild(ArticleListComponent) configList:ArticleListComponent;
  currentUser: User;
  isAuthentication:boolean;
  isActive:boolean;
  isLoggedIn : Observable<boolean>;
  currentUserSubscription: Subscription;
  listConfig:ArticleListConfig = new ArticleListConfig();
  listConfigSubject:any
  tagList:Array<string>=[];
  constructor(
    private authenticationService:AuthenticationService,
    private router:Router,
    private repositoryService:RepositoryService
    ) {
  this.isLoggedIn=this.authenticationService.isLoggedIn();
  }

  ngOnInit() { 
    this.listConfig.type='All';
    this.listConfig.filter=new Object();
    this.listConfigSubject=new BehaviorSubject(this.listConfig)
    this.GetTags();
    debugger;
   } 
//When using subject instead of behaviorsubject
  //  ngAfterViewInit(){
  //   this.listConfigSubject.next(this.listConfig);
  //   debugger;
  //  }
  
   
setConfig(type:string){
  this.listConfig.filter=new Object(); 
  this.isLoggedIn.subscribe(isloggin=>{
    if(type=='Feed' && !isloggin){
        this.router.navigateByUrl("/login"); 
    } 
    else{
      this.listConfig.type=type;
      this.listConfigSubject.next(this.listConfig); 
      debugger;
      //when using viewChild to pass data   
     // this.configList.GetAllbyType(this.listConfig.type);
    }
  })
}

GetTags(){
   const serviceName="tags";
   this.repositoryService.getData(serviceName).subscribe((result:{tags:Array<string>})=>{
      this.tagList=result.tags
   })
}

setFilters(type:string, filterName:string){
    this.listConfig.type=type;
    this.listConfig.filter=new Object();  
    this.listConfig.filter.tag=filterName;
    this.listConfigSubject.next(this.listConfig); 
    debugger;
}
}
  