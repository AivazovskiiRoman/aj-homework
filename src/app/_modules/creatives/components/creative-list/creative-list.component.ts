import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Creative } from '../../common/models/creative';
import * as Creatives from '../../common/store/creatives.actions';

@Component({
  selector: 'app-creative-list',
  templateUrl: './creative-list.component.html',
  styleUrls: ['./creative-list.component.scss']
})
export class CreativeListComponent implements OnInit {
  creatives: Array<Creative>;
  message: string;
  bgClass: string;
  page = 1;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.dispatch(new Creatives.GetCreatives());
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
