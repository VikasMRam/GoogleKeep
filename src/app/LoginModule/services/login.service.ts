import { Injectable } from '@angular/core';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  users: Array<User> = [];

  authenticate(userID, password) {
    for (let user of this.users) {
      if (user.userName == userID) {
        if (user.password == password) {
          return "authenticated";
        }
        return "wrong Password"
      }
    }
    return "No such User Exists"

  }
  Register(userID, password) {
    let user = new User();
    user.userName = userID;
    user.password = password;
    this.users.push(user);
    return "registered"
  }


}

