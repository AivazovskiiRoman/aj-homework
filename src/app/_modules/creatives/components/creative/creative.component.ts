import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { Creative } from '../../common/models/creative';
import * as Creatives from '../../common/store/creatives.actions';

@Component({
  selector: 'app-creative',
  templateUrl: './creative.component.html',
  styleUrls: ['./creative.component.scss']
})
export class CreativeComponent implements OnInit {
  @Input() creative: Creative;

  constructor(private store: Store<any>) {}

  ngOnInit() {}

  deleteCreative(id: number) {
    this.store.dispatch(new Creatives.DeleteCreative(id));
  }
}
