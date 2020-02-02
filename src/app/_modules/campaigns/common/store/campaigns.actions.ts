import { Action } from '@ngrx/store';
import { Campaign } from '../models/campaign';

export enum CampaignsActionType {
  GET_CAMPAIGNS = 'GET_CAMPAIGNS',
  GET_CAMPAIGNS_SUCCESS = 'GET_CAMPAIGNS_SUCCESS',
  GET_CAMPAIGNS_FAILED = 'GET_CAMPAIGNS_FAILED',
  DELETE_CAMPAIGN = 'DELETE_CAMPAIGN',
  DELETE_CAMPAIGN_SUCCESS = 'DELETE_CAMPAIGN_SUCCESS',
  DELETE_CAMPAIGN_FAILED = 'DELETE_CAMPAIGN_FAILED'
}

export class GetCampaigns implements Action {
  readonly type = CampaignsActionType.GET_CAMPAIGNS;
}

export class GetCampaignsSuccess implements Action {
  readonly type = CampaignsActionType.GET_CAMPAIGNS_SUCCESS;
  constructor(public payload: Array<Campaign>) {}
}

export class GetCampaignsFailed implements Action {
  readonly type = CampaignsActionType.GET_CAMPAIGNS_FAILED;
  constructor(public payload: string) {}
}

export class DeleteCampaign implements Action {
  readonly type = CampaignsActionType.DELETE_CAMPAIGN;
  constructor(public payload: number) {}
}

export class DeleteCampaignSuccess implements Action {
  readonly type = CampaignsActionType.DELETE_CAMPAIGN_SUCCESS;
  constructor(public payload: number) {}
}

export class DeleteCampaignFailed implements Action {
  readonly type = CampaignsActionType.DELETE_CAMPAIGN_FAILED;
  constructor(public payload: string) {}
}

export type CampaignsActions =
  | GetCampaigns
  | GetCampaignsSuccess
  | GetCampaignsFailed
  | DeleteCampaign
  | DeleteCampaignSuccess
  | DeleteCampaignFailed;
