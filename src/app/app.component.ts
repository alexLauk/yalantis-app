import { Component, OnInit } from '@angular/core';
import { UserService, User } from './user.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  users = [];
  usersList = [];

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
       this.users = users;
      });
    }

  onFilterUsers(month: string) {
    if (month) {
      this.usersList = this.users.filter( user => user.month === month);
    } else { this.usersList = []; }

  }

}
