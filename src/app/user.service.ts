import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

    private url = '';

    constructor(private http: HttpClient) { }

    getUsers() {
        return this.http.get(this.url);
    }

}
