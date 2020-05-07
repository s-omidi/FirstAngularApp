import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import {RepositoryService} from '../../core/services/repository.service';
import {Comments} from '../../core/models/Comments';
import {AuthenticationService} from '../../core/services/authentication.service';
import { User } from '../../core/models/User';


@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
@Input() slug: string;
  constructor(private repositoryService:RepositoryService,private authService:AuthenticationService,private router:Router) { }
  comments:Comments;
  user:User;
  currentUser:string;
  body:number;
  ngOnInit() {   
    this.slug
    this.GetSlugCommnents();
     this.authService.currentUser.subscribe((data)=>{
        this.currentUser=data.username;
     })     

  }

  GetSlugCommnents(){
    const ServiceName=`articles/${this.slug}/comments`;
    const params={limit:'10',offset:'0'}
    this.repositoryService.getAllData(ServiceName,params).subscribe((data:{comments:Comments})=>{
       this.comments=data.comments     
    })
  }

  EmiteComment($event:boolean){
    if($event){
    // this.ngOnInit();
     this.GetSlugCommnents();
    }   
  }
  
  DeleteComment(comment:Comments){
    let serviceName=`articles/${this.slug}/comments/${comment.id}`;
    this.repositoryService.delete(serviceName).subscribe(res=>{
      this.ngOnInit();
    })
  }



}
