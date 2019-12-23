import { Component, OnInit } from '@angular/core';
import { User } from './interfaces';
import {Observable} from 'rxjs'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  users: User[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<User[]>('https://yalantis-react-school.herokuapp.com/api/task0/users')
      .subscribe(users => {
        console.log(users);
        this.users = users;
    });
  }

}
