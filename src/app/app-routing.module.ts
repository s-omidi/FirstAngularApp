import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ArticleListComponent} from './article-list/article-list.component';
import {ArticleComponent} from './article/article.component';
import {NotFoundComponent} from './Error-pages/not-found/not-found.component';
import {ServerErrorComponent} from './Error-pages/server-error/server-error.component'
import { AuthGuard} from './auth/auth.guard';


import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "articles",
    component: ArticleListComponent
  },
  {
    path: "article/:slug",
    component: ArticleComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path: "viewdetails",
    loadChildren: "./view-details/view-details.module#ViewDetailsModule",
    canActivate:[AuthGuard]
  },
  {
    path: "about",
    loadChildren: "./about/about.module#AboutModule"
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
