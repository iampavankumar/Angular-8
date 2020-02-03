import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchText: any[]): any {
    // return null;

    if(searchText===undefined){
      return value;
    }
    else{
      return value.filter(search =>{
        return search.emp_name.includes(searchText)
      })
    }
  }

}
