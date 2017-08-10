import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { AuthorizationService } from '../../services/authorization.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Ad } from '../../models/ad';


@Component({
  selector: 'app-ad-detail',
  templateUrl: './ad-detail.component.html',
  styleUrls: ['./ad-detail.component.css']
})
export class AdDetailComponent implements OnInit {
  isLogedIn: boolean;
  author: string;
  ad: Ad;
  createdAtDatetime: Date;

  constructor(
    private dataService: DataService,
    private authorizationService: AuthorizationService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
    this.createdAtDatetime = this.route.snapshot.params['createdAtDatetime'];

    this.ad = this.dataService.getAd(this.createdAtDatetime);

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

  removeAd(ad) {
    this.dataService.removeAd(ad);
    this.flashMessagesService.show('Ad Removed ❗', { cssClass: 'alert-danger', timeout: 4000 });
    this.router.navigate(['/']);
  }

}
