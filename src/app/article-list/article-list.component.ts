import { Component, OnInit, Input ,ChangeDetectorRef} from '@angular/core';
import {Subject} from 'rxjs';
import {RepositoryService} from '../core/services/repository.service';
import {Articles} from '../core/models/Articles';
import {ArticleListConfig} from '../core/models/ArticleListConfig';



@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  article:Articles;
  totalPage:number;
  currentPage:number=1;
  pageSize:number=10;
  articleListConfig:ArticleListConfig=new ArticleListConfig();
  @Input() listConfigSubject:Subject<ArticleListConfig>;

  // @Input() 
  // set listConfig(listConfig:ArticleListConfig){
  //   if(listConfig){
  //    this.articleListConfig.type=listConfig.type
  //   }}
 
constructor(private repositoryservice:RepositoryService,private cd:ChangeDetectorRef) { }

  ngOnInit() {
    this.listConfigSubject.subscribe(event => {
      this.articleListConfig=event;
      this.cd.markForCheck();
      debugger;
      this.GetAll(this.currentPage,this.pageSize);
      debugger;
    });
  }

  pageChanged(event: any){
    this.currentPage = event;
    this.GetAll(this.currentPage,this.pageSize)
  }

  GetAll(currentPage:number,pageSize:number){
    const parameter={limit:pageSize,offset:(currentPage-1),tag:"",author:"",favorited:""};
    if(this.articleListConfig.filter.tag!=undefined){
      debugger;
      parameter.tag=this.articleListConfig.filter.tag;
    }
    debugger;
    const serviceName=this.articleListConfig.type=='Feed'?"articles/feed":"articles";
    debugger;
    this.repositoryservice.getAllData(serviceName,parameter).subscribe((data: { articles: Articles,articlesCount:number }) => {     
      this.article = data.articles;
      debugger;
      this.totalPage = data.articlesCount;
    },
    error=>{
     console.log("error in get Articles ==>", error.error);
    })

 }

//when using viewChild to pass data
//  GetAllbyType(type:string){ 
//    this.articleListConfig.type=type;
//    this.GetAll(this.currentPage,this.pageSize);   
//  }
  
 
}
