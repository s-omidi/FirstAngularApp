import { Component, OnInit } from '@angular/core';
import {LoaderService} from '../../services/loader/loader.service'

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  loading: boolean;
  color:string;
  mode:string;
  value:number;
  constructor(private loaderService: LoaderService) {
    
  }

  ngOnInit() {
    this.loaderService.isLoading.subscribe((res) => {
      console.log(res);
      this.color = 'primary';
      this.mode = 'indeterminate';
      this.value = 50;
      this.loading = res;
     
    });
  
  }

}
