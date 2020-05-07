import { Injectable } from '@angular/core';
import {environment} from './../../../environments/environment'

@Injectable({
  providedIn:'root',
})
export class EnviromentUrlService {

  public Url:string = environment.url;
  constructor() { }
}
