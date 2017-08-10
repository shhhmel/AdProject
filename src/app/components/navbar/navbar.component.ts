import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthorizationService } from '../../services/authorization.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogedIn: boolean;
  users: User[];
  user: User = {
    username: '',
    password: '',
    logedIn: false
  };

  constructor(
    private flashMessagesService: FlashMessagesService,
    private authorizationService: AuthorizationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.users = this.authorizationService.getUsers();

    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].logedIn) {
        this.isLogedIn = true;
        this.user = this.users[i];
      }
    }
  }

  logoutUser() {
    this.isLogedIn = false;
    this.user.logedIn = false;
    this.users = this.authorizationService.logoutUser(this.user);
    // Hook to update components
    this.hook();
    this.flashMessagesService.show('You are loged out 😶', { cssClass: 'alert-success', timeout: 4000 });
  }

  login() {
    this.user.logedIn = true;
    this.isLogedIn = true;
    this.users = this.authorizationService.logUser(this.user);
    // Hook to update components
    this.hook();
    this.flashMessagesService.show('You are loged in 😀', { cssClass: 'alert-success', timeout: 4000 });
  }

  registerAndLogin() {
    this.user.logedIn = true;
    this.isLogedIn = true;
    this.users = this.authorizationService.addUser(this.user);
    // Hook to update components
    this.hook();
    this.flashMessagesService.show('You are registered and loged in 😀', { cssClass: 'alert-success', timeout: 4000 });
  }

  checkUser(form) {

    if (form.valid) {
      this.user = {
        username: form.form.value.username,
        password: form.form.value.password,
        logedIn: false
      };

      let flag = false;

      // If the user is
      for (let i = 0; i < this.users.length; i++) {

        // If User and Password is valid
        if (this.users[i].username === this.user.username && this.users[i].password === this.user.password) {
          this.login();
          flag = true;
          break;

        // If User valid and Password NOT
        } else if (this.users[i].username === this.user.username && this.users[i].password !== this.user.password) {
          this.flashMessagesService.show('Password is invalid ❗', { cssClass: 'alert-danger', timeout: 4000 });
          flag = true;
          break;
        }
      }

      // If there is no user
      if (!flag) {
        this.registerAndLogin();
        flag = true;
      }
    }
  }

  hook() {
    this.router.navigate(['/404']).then(nav => {
      this.router.navigate(['/']);
    }, err => {
      console.log(err);
    });
  }

}
