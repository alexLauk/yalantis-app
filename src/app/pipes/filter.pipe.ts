import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(users: any[], month: string): any[] {
    if (month) {
      return [];
    }

    return users.filter( user => user.month === month);
  }

}
