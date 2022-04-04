import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, search: any): any {
    // return true;

    // console.log(value);
    if(Array.isArray(value) && search){
      // console.log('it is array');
        // console.log(search);
      let arr:any[]=[];
      let tsearch!:any;
      value.forEach((val)=>{

        // console.log(search);
        // console.log(val);
        // if(val.toLowerCase() == search.toLowerCase()){  arr.push(val); }
        tsearch = new RegExp(search, 'gi');
        if(val.toLowerCase().match(tsearch)){  arr.push(val); }
      });

      return arr;
    }

    return value;

  }

}
