import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampaignListComponent } from './_modules/campaigns/components/campaign-list/campaign-list.component';
import { CreativeListComponent } from './_modules/creatives/components/creative-list/creative-list.component';
import { CreativesOfCampaignComponent } from './_modules/creatives/components/creatives-of-campaign/creatives-of-campaign.component';

const routes: Routes = [
  { path: '', component: CampaignListComponent },
  { path: 'creatives', component: CreativeListComponent },
  {
    path: 'creatives-of-campaign/:id',
    component: CreativesOfCampaignComponent
  },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
