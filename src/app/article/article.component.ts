import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {RepositoryService} from '../core/services/repository.service';
import{Articles} from '../core/models/Articles';
import { from } from 'rxjs';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(private router:Router,private activeRout:ActivatedRoute,private repositortService:RepositoryService) { }
  slug:string;
  article:Articles;
  ngOnInit() {
   this.slug=this.activeRout.snapshot.params["slug"];
   debugger;
   this.GetArticle();
  }


  GetArticle(){
    var serviceName=`articles/${this.slug}`
    this.repositortService.getData(serviceName).subscribe((data: { article: Articles })=>{
       this.article=data.article;
    }
    ),
    error=>{
      console.log(`error in get article slug:${this.slug}`,error.error)
    }
  }
     
  onToggleFavorite(favorite:boolean){
    console.log('emited fav==>',favorite);
    this.article.favorited=favorite;
    if(favorite){
      if(this.article.favoritesCount>0){
        this.article.favoritesCount--
      }      
    }
    else if(!favorite){
      this.article.favoritesCount++;
    }
  }

  onToggleFollowing(following:boolean){
    this.article.author.following=following;
  }


  }
    
    
  




