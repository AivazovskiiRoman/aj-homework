import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CampaignsModule } from './_modules/campaigns/campaigns.module';
import { CreativesModule } from './_modules/creatives/creatives.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CampaignsModule, CreativesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
