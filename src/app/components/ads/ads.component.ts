import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { AuthorizationService } from '../../services/authorization.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Ad } from '../../models/ad';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {
  isLogedIn: boolean;
  author: string;
  ads: Ad[];
  p = 1;

  constructor(
    private dataService: DataService,
    private authorizationService: AuthorizationService,
    private router: Router,
    private flashMessagesService: FlashMessagesService
  ) {

  }

  ngOnInit() {
    this.ads = this.dataService.getAds();

    let users = this.authorizationService.getUsers();

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

  totalAds() {
    return this.ads.length;
  }

  removeAd(ad) {
    this.dataService.removeAd(ad);
    this.flashMessagesService.show('Ad Removed ❗', { cssClass: 'alert-danger', timeout: 4000 });
  }

}
