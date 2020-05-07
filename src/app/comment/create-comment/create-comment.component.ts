import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {Router,ActivatedRoute } from '@angular/router';
import {RepositoryService} from '../../core/services/repository.service';
import {Comments} from '../../core/models/Comments';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CommentComponent implements OnInit {
  @Output() emitPass: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() slug:string;
  commentForm :FormGroup;
  loading=false;
  submitted=false;
  returnUrl:string;
  comment:Comments;

  constructor(private fb:FormBuilder,
    private router:Router,
    private route:ActivatedRoute,
    private repositoryService:RepositoryService
    ) { }

    ngOnInit() {
      this.commentForm = this.fb.group({    
        comment: ['', Validators.required],
        
    });
 
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  get f() { return this.commentForm.controls; }

    onSubmit(){
    this.submitted=true;
    if(this.commentForm.invalid) return ;   
    var comment=this.commentForm.value;
    let serviceName=`articles/${this.slug}/comments`;
    let body={ comment: { body: comment.comment } }
    this.repositoryService.create(serviceName,body).subscribe((res:{comment:Comments})=>{
      this.submitted=false;
      this.commentForm.reset('');    
      console.log("created comment",res.comment);
     this.emitPass.emit(true);      
    },
    error=>{
      this.submitted=false;
      console.log(`error in post comment for article===>${this.slug}`,error.error);
    })
  }

}
