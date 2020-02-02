import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { CampaignsService } from '../services/campaigns.service';

import { Campaign } from '../models/campaign';

import {
  CampaignsActionType,
  GetCampaignsSuccess,
  GetCampaignsFailed,
  DeleteCampaignSuccess,
  DeleteCampaignFailed
} from './campaigns.actions';

import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class CampaignsEffects {
  constructor(
    private actions$: Actions,
    private campaignsService: CampaignsService
  ) {}

  @Effect()
  getCampaigns$ = this.actions$.pipe(
    ofType(CampaignsActionType.GET_CAMPAIGNS),
    switchMap(() =>
      this.campaignsService.getAll().pipe(
        map((campaigns: Array<Campaign>) => new GetCampaignsSuccess(campaigns)),
        catchError(error => of(new GetCampaignsFailed(error)))
      )
    )
  );

  @Effect()
  deleteCampaign$ = this.actions$.pipe(
    ofType(CampaignsActionType.DELETE_CAMPAIGN),
    switchMap(action =>
      this.campaignsService.deleteItem(action['payload']).pipe(
        map((id: number) => new DeleteCampaignSuccess(id)),
        catchError(error => of(new DeleteCampaignFailed(error)))
      )
    )
  );
}
