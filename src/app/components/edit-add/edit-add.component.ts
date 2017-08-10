import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Ad } from '../../models/ad';

@Component({
  selector: 'app-edit-add',
  templateUrl: './edit-add.component.html',
  styleUrls: ['./edit-add.component.css']
})
export class EditAddComponent implements OnInit {
  ad: Ad;
  createdAtDatetime: Date;

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
    this.createdAtDatetime = this.route.snapshot.params['createdAtDatetime'];

    this.ad = this.dataService.getAd(this.createdAtDatetime);
  }

  editAd(form) {
    if (form.valid) {
      this.dataService.editAd(this.ad);
      this.flashMessagesService.show('Ad Edited 😀', { cssClass: 'alert-success', timeout: 4000 });
      this.router.navigate(['/']);
    }
  }

}
