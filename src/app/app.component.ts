import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {
  public users = [];
  public userSubscription: Subscription;
  public filterUsers = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userSubscription = this.userService.fetchUsers()
      .subscribe(users => {
        this.users = users;
      });
  }

  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  getMonths() {
    const obj = this.users.map(users => users.month)
                          .reduce((count, months) => {
                            count[months] = (count[months] || 0) + 1;
                            return count;
                          }, {});
    return Object.keys(obj).map(month => ({ name: month, count: obj[month] })
    );

  }

  onFilterUsers(month: string) {
      this.filterUsers = this.users.filter( user => user.month === month);
  }

}
