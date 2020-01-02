import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export interface User {
    firstName: string;
    lastName: string;
    dob: string;
    // fullName?: string;
 }

@Injectable({
  providedIn: 'root'
})
export class UserService {

    private url = 'https://yalantis-react-school.herokuapp.com/api/task0/users';

    constructor(private http: HttpClient) { }

    public fetchUsers() {
        return this.http.get<User[]>(this.url)
        /* .pipe(
            map(users => users.map( user => ({
                fullName: `${user.firstName} ${user.lastName}`,
                month: new Date(user.dob).toLocaleDateString('en-US', {month: 'long'})})
                )
              )
        ); */
    }

}
