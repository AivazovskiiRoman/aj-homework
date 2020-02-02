import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, ActionReducer } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { CampaignComponent } from './components/campaign/campaign.component';
import { CampaignListComponent } from './components/campaign-list/campaign-list.component';

import { campaignsReducer } from './common/store/campaigns.reducers';
import { CampaignsEffects } from './common/store/campaigns.effects';
import { CampaignsService } from './common/services/campaigns.service';

export function logger(reducer: ActionReducer<any>): any {
  return storeLogger()(reducer);
}

export const metaReducers = [logger];

@NgModule({
  declarations: [CampaignComponent, CampaignListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule,
    NgxPaginationModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('campaigns', campaignsReducer, { metaReducers }),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([CampaignsEffects])
  ],
  exports: [CampaignListComponent, CampaignComponent],
  providers: [CampaignsService]
})
export class CampaignsModule {}
