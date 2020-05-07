import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {Articles} from '../../../core/models/Articles';
import {RepositoryService} from '../../../core/services/repository.service';
import {AuthenticationService} from '../../../core/services/authentication.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  constructor(
    private repositpryService:RepositoryService,
    private authService:AuthenticationService,
    private router:Router,
    private activeRoute:ActivatedRoute
    ) { }

  @Input() article: Articles;
  @Output() favorited = new EventEmitter<boolean>();
  isSubmiting:boolean;

  ngOnInit() {
   
  }

  toggleFavorite(){
    
  this.isSubmiting=true;
  this.authService.isLoggedIn().subscribe(res=>{
      if(!res){
         this.router.navigateByUrl["/login"];
         return;
      }   
    if(!this.article.favorited){     
        const serviceName=`articles/${this.article.slug}/favorite`;
        const body:object={};
        this.repositpryService.create(serviceName,JSON.stringify(body)).subscribe(res=>{
            this.isSubmiting=false;
            this.favorited.emit(true);}),
            error=>{
              this.isSubmiting=false
            }
          }
    else if(this.article.favorited){
        const serviceName=`articles/${this.article.slug}/favorite`;       
        this.repositpryService.delete(serviceName).subscribe(res=>{
        this.isSubmiting=false;
        this.favorited.emit(false);
      }),
      error=>{
        this.isSubmiting=false
      }

    }
    })
  }

}




