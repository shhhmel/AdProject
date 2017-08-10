import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isLogedIn: boolean;

  constructor(
    private authorizationService: AuthorizationService
  ) { }

  ngOnInit() {
    const users = this.authorizationService.getUsers();

    for (let i = 0; i < users.length; i++) {
      if (users[i].logedIn) {
        this.isLogedIn = true;
        break;
      } else {
        this.isLogedIn = false;
      }
    }
  }

}
