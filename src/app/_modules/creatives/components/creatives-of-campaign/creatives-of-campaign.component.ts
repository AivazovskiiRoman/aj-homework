import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';

import { Creative } from '../../common/models/creative';
import * as Creatives from '../../common/store/creatives.actions';

@Component({
  selector: 'app-creatives-of-campaign',
  templateUrl: './creatives-of-campaign.component.html',
  styleUrls: ['./creatives-of-campaign.component.scss']
})
export class CreativesOfCampaignComponent implements OnInit {
  parentId: string;
  creatives: Array<Creative>;
  message: string;
  bgClass: string;
  page = 1;

  constructor(private route: ActivatedRoute, private store: Store<any>) {}

  ngOnInit() {
    this.parentId = this.route.snapshot.paramMap.get('id');

    this.store.dispatch(new Creatives.GetCreativesById(Number(this.parentId)));
    this.store.select('creatives').subscribe(
      response => {
        this.creatives = response.creativeList;
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
