import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { Campaign } from '../../common/models/campaign';
import * as Campaigns from '../../common/store/campaigns.actions';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent implements OnInit {
  @Input() campaign: Campaign;

  constructor(private store: Store<any>) {}

  ngOnInit() {}

  deleteCampaign(id: number) {
    this.store.dispatch(new Campaigns.DeleteCampaign(id));
  }
}
