import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

import { Customer } from "./customer";

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.get<Customer[]>("api/customers").map(users => {
      // login successful if there's a jwt token in the response
      let foundUsers = users.filter(user => user.name == username);
      if (foundUsers.length) {
        let user = foundUsers[0];
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem("currentUser", JSON.stringify(user));
        return user;
      }

      throw new Error("Username or password is incorrect");
    });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("currentUser");
  }
}
