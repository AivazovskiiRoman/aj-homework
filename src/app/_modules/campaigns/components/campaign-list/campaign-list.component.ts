import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Campaign } from '../../common/models/campaign';
import * as Campaigns from '../../common/store/campaigns.actions';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.scss']
})
export class CampaignListComponent implements OnInit {
  campaigns: Array<Campaign>;
  message: string;
  bgClass: string;
  page = 1;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.dispatch(new Campaigns.GetCampaigns());
    this.store.select('campaigns').subscribe(
      response => {
        this.campaigns = response.campaignList;
        this.message = response.message;
        this.bgClass = response.infoClass;

        setTimeout(() => {
          this.message = '';
        }, 2000);
      },
      error => {
        console.log(error);
      }
    );
  }
}
