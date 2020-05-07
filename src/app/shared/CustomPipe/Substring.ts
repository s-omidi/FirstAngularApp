import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
   name: 'substring'
})

export class SubstringPipe implements PipeTransform {
    transform(value : string, count : number) : any {   
       if(value.length<=count) return value     
       return value.substring(0, count) + '...';
    }
 }



