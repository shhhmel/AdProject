import { Injectable } from '@angular/core';
import { Ad } from '../models/ad';

@Injectable()
export class DataService {
  ads: Ad[];

  constructor() { }

  // Get Ads from LS
  getAds() {
    if (localStorage.getItem('ads') === null) {
      this.ads = [];
    } else {
      this.ads = JSON.parse(localStorage.getItem('ads'));
    }

    // console.log('ADS GOT');
    return this.ads;
  }

  // Get single Ad from LS
  getAd(date) {
    for (let i = 0; i < this.ads.length; i++) {
      // Check type of "createdAtDatetime"
      if (typeof this.ads[i].createdAtDatetime == 'object') {
        if (this.ads[i].createdAtDatetime.toJSON() === date) {
          // console.log('AD GOT');
          return this.ads[i];
        }
      }

      if (this.ads[i].createdAtDatetime === date) {
        // console.log('AD GOT');
        return this.ads[i];
      }
    }
  }

  // Add Ad to LS
  addAd(ad: Ad) {
    // Local variable
    let ads;

    if (localStorage.getItem('ads') === null) {
      ads = [];

      // Pusn new ad
      ads.unshift(ad)

      // Set new ad to LS
      localStorage.setItem('ads', JSON.stringify(ads));
      // console.log('AD ADDED - LS EMPTY');
      this.ads = ads;
    } else {
      ads = JSON.parse(localStorage.getItem('ads'));

      // Pusn new ad
      ads.unshift(ad)

      // Set new ad to LS
      localStorage.setItem('ads', JSON.stringify(ads));
      // console.log('AD ADDED - LS FULL');
      this.ads = ads;
    }

  }

  // Remove Ad from LS
  removeAd(ad: Ad) {
    this.ads.map((nextAd, i) => {
      if (ad === nextAd) {
        this.ads.splice(i, 1);
        localStorage.setItem('ads', JSON.stringify(this.ads));
      }
    });
    // console.log('AD REMOVED');
  }

  // Edit Ad
  editAd(ad: Ad) {
    for (let i = 0; i < this.ads.length; i++) {
      if (this.ads[i].createdAtDatetime === ad.createdAtDatetime) {
        this.ads.splice(i, 1, ad);
        localStorage.setItem('ads', JSON.stringify(this.ads));
        // console.log('AD EDITED');
      }
    }
  }

}
