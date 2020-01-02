import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  //users: User[] = [];
  months = [];
  usersList = [];

  constructor(private userService: UserService){}

  ngOnInit() {
    this.getMonths()

    }


  getMonths() {
    this.userService.fetchUsers()
      .subscribe(months => {
       //console.log(months);
       // создаем новый Set, передавая ему массив, все дубликаты будут удалены.
        this.months = [...new Set( months.map(obj => obj.month)) ]
      });
  }

  onFilterUsers(month: string) {
    this.userService.fetchUsers()
    .subscribe(usersList => {
      //console.log(usersList.filter( user => user.month === month));
      this.usersList = usersList.filter( user => user.month === month)
    })
  }

}
