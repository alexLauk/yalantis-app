import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../user.service';

@Pipe({
  name: 'uniqueMonth'
})
export class UniqueMonthPipe implements PipeTransform {

  transform(users: any[]): any[] {
    return users = [...new Set( users.map(obj => obj.month)) ];
  }



}
