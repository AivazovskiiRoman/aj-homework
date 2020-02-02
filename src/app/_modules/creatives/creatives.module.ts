import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, ActionReducer } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { CreativeComponent } from './components/creative/creative.component';
import { CreativeListComponent } from './components/creative-list/creative-list.component';

import { creativesReducer } from './common/store/creatives.reducers';
import { CreativesEffects } from './common/store/creatives.effects';
import { CreativesService } from './common/services/creatives.service';

export function logger(reducer: ActionReducer<any>): any {
  return storeLogger()(reducer);
}

export const metaReducers = [logger];

@NgModule({
  declarations: [CreativeComponent, CreativeListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule,
    NgxPaginationModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('creatives', creativesReducer, { metaReducers }),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([CreativesEffects])
  ],
  exports: [CreativeListComponent, CreativeComponent],
  providers: [CreativesService]
})
export class CreativesModule {}
