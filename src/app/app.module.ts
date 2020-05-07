import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {HTTP_INTERCEPTORS ,HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module'
import { AppComponent } from './app.component';
import { NotFoundComponent } from './Error-pages/not-found/not-found.component';
import { ServerErrorComponent } from './Error-pages/server-error/server-error.component';
import {LoaderComponent} from './shared/loader/loader/loader.component';
import {LoaderInterceptor} from './shared/services/loader/LoaderInterceptor';
import { LoaderService } from './shared/services/loader.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './layout/header/header.component';
import {ErrorInterceptor} from './core/interseptors/ErrorInterceptor ';
import { ArticleListComponent} from './article-list/article-list.component';
import {ArticleComponent} from './article/article.component';
import { CommentListComponent } from './comment/comment-list/comment-list.component';
import { CommentComponent } from './comment/create-comment/create-comment.component';

//import {FlexLayoutModule} from '@angular/flex-layout';
// import {AboutModule} from './about/about.module'




@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,   
    NotFoundComponent,
    ServerErrorComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    ArticleListComponent,
    ArticleComponent,
    CommentListComponent,
    CommentComponent,
  
  
      
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    BrowserAnimationsModule, 
    SharedModule,   
    AppRoutingModule,  
   
 
   
  ],
  providers: [ 
     LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

