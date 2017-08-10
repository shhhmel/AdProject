import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable()
export class AuthorizationService {
  users: User[];

  constructor() { }

  // Get Users from LS
  getUsers() {
    if (localStorage.getItem('users') === null) {
      this.users = [
        {
          username: '',
          password: '',
          logedIn: false
        }
      ];
    } else {
      this.users = JSON.parse(localStorage.getItem('users'));
    }

    return this.users;
  }

  logUser(user: User) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].username === user.username) {
        this.users[i].logedIn = true
      } else {
        this.users[i].logedIn = false
      }
    }

    localStorage.setItem('users', JSON.stringify(this.users));
    return this.users;
  }

  logoutUser(user: User) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].username === user.username) {
        this.users[i].logedIn = false;
        break;
      }
    }

    localStorage.setItem('users', JSON.stringify(this.users));
    return this.users;
  }

  // Add User to LS
  addUser(user: User) {
    // Local variable
    let users;

    if (localStorage.getItem('users') === null) {
      users = [];

      // Pusn new ad
      users.unshift(user)

      // Set new ad to LS
      localStorage.setItem('users', JSON.stringify(users));
      console.log('USER ADDED - LS EMPTY');
      this.users = users;
      return this.users;

    } else {
      users = JSON.parse(localStorage.getItem('users'));

      // Pusn new ad
      users.push(user)

      // Set new ad to LS
      localStorage.setItem('users', JSON.stringify(users));
      console.log('USER ADDED - LS FULL');
      this.users = users;

      return this.users;
    }

  }
}
