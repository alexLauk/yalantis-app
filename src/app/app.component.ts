import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './interfaces';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isRender = false;
  users = [];
  filterUsers = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.fetchUsers()
        .pipe(
          map(users => users.map( user => ({
              fullName: `${user.firstName} ${user.lastName}`,
              month: new Date(user.dob).toLocaleDateString('en-US', {month: 'long'})})
              )
            )
      )
      .subscribe(users => {
        //console.log(users)
        this.users = users;
      });
  }

  getMonths() {
    const obj = this.users.map(users => users.month)
                          .reduce((count, months) => {
                            count[months] = (count[months] || 0) + 1;
                            return count;
                          }, {});
    // console.log(obj);
    /* console.log( Object.keys(obj).map(month => ({ month, count: obj[month] })));  */
    return Object.keys(obj).map(month => ({ name: month, count: obj[month] })
    );

  }

  onFilterUsers(month: string) {
    console.log(month);
    if (month) {
      this.filterUsers = this.users.filter( user => user.month === month);
      // console.log(this.filterUsers);
    } else {this.filterUsers = []}
  }

  /* getColor() {

  }
 */

}
