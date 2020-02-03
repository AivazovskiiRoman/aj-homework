import { Action } from '@ngrx/store';
import { Creative } from '../models/creative';

export enum CreativesActionType {
  GET_CREATIVES = 'GET_CREATIVES',
  GET_CREATIVES_SUCCESS = 'GET_CREATIVES_SUCCESS',
  GET_CREATIVES_FAILED = 'GET_CREATIVES_FAILED',
  GET_CREATIVES_BY_ID = 'GET_CREATIVES_BY_ID',
  GET_CREATIVES_BY_ID_SUCCESS = 'GET_CREATIVES_BY_ID_SUCCESS',
  GET_CREATIVES_BY_ID_FAILED = 'GET_CREATIVES_BY_ID_FAILED',
  DELETE_CREATIVE = 'DELETE_CREATIVE',
  DELETE_CREATIVE_SUCCESS = 'DELETE_CREATIVE_SUCCESS',
  DELETE_CREATIVE_FAILED = 'DELETE_CREATIVE_FAILED'
}

export class GetCreatives implements Action {
  readonly type = CreativesActionType.GET_CREATIVES;
}

export class GetCreativesSuccess implements Action {
  readonly type = CreativesActionType.GET_CREATIVES_SUCCESS;
  constructor(public payload: Array<Creative>) {}
}

export class GetCreativesFailed implements Action {
  readonly type = CreativesActionType.GET_CREATIVES_FAILED;
  constructor(public payload: string) {}
}

export class GetCreativesById implements Action {
  readonly type = CreativesActionType.GET_CREATIVES_BY_ID;
  constructor(public payload: number) {}
}

export class GetCreativesByIdSuccess implements Action {
  readonly type = CreativesActionType.GET_CREATIVES_BY_ID_SUCCESS;
  constructor(public payload: Array<Creative>) {}
}

export class GetCreativesByIdFailed implements Action {
  readonly type = CreativesActionType.GET_CREATIVES_BY_ID_FAILED;
  constructor(public payload: string) {}
}

export class DeleteCreative implements Action {
  readonly type = CreativesActionType.DELETE_CREATIVE;
  constructor(public payload: number) {}
}

export class DeleteCreativeSuccess implements Action {
  readonly type = CreativesActionType.DELETE_CREATIVE_SUCCESS;
  constructor(public payload: number) {}
}

export class DeleteCreativeFailed implements Action {
  readonly type = CreativesActionType.DELETE_CREATIVE_FAILED;
  constructor(public payload: string) {}
}

export type CreativesActions =
  | GetCreatives
  | GetCreativesSuccess
  | GetCreativesFailed
  | GetCreativesById
  | GetCreativesByIdSuccess
  | GetCreativesByIdFailed
  | DeleteCreative
  | DeleteCreativeSuccess
  | DeleteCreativeFailed;
