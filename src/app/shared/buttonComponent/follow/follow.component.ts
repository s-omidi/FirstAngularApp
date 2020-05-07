import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../../core/services/authentication.service';
import {RepositoryService} from '../../../core/services/repository.service';
import {Author} from '../../../core/models/Author';
@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.css']
})
export class FollowComponent implements OnInit {

  constructor(
    private repositoryService:RepositoryService,
    private authService:AuthenticationService,
    private router:Router
    ) { }

 @Input() author:Author;
 @Output() following:EventEmitter<boolean> = new EventEmitter<boolean>();
 isSubmited:boolean




  ngOnInit() {
  }

  toggleFollowing(){
    debugger
    this.isSubmited=true;
    this.authService.isLoggedIn().subscribe(res=>{
        if(!res){
           this.router.navigateByUrl["/login"];
           return;
        }
  })
  
    let serviceName=`profiles/${this.author.username}/follow`;   
    const body:object={}
    if(!this.author.following){              
      this.repositoryService.create(serviceName,JSON.stringify(body)).subscribe(res=>{
        this.isSubmited=false;
        this.following.emit(true);
       })
    }
    else if(this.author.following){
      this.repositoryService.delete(serviceName).subscribe(res=>{
        this.isSubmited =false;
        this.following.emit(false);
      })
    }
    
   }
}


