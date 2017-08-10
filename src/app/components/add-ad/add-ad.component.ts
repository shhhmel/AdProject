import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { AuthorizationService } from '../../services/authorization.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Ad } from '../../models/ad';

@Component({
  selector: 'app-add-ad',
  templateUrl: './add-ad.component.html',
  styleUrls: ['./add-ad.component.css']
})
export class AddAdComponent implements OnInit {
  isLogedIn: boolean;
  author: string;
  ad: Ad;
  title = '';
  description = '';

  constructor(
    private dataService: DataService,
    private authorizationService: AuthorizationService,
    private router: Router,
    private flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
    const users = this.authorizationService.getUsers();

    for (let i = 0; i < users.length; i++) {
      if (users[i].logedIn) {
        this.isLogedIn = true;
        this.author = users[i].username;
        break;
      } else {
        this.isLogedIn = false;
      }
    }
  }

  addAd(form) {
    this.ad = {
      title: this.title,
      description: this.description,
      authorName: this.author,
      createdAtDatetime: new Date()
    };

    if (form.valid) {
      this.dataService.addAd(this.ad);
      this.flashMessagesService.show('New ad created 😀', { cssClass: 'alert-success', timeout: 4000 });
      this.router.navigate(['details/', this.ad.createdAtDatetime.toJSON()]);
    }
  }

}
