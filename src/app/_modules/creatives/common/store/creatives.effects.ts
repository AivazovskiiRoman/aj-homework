import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { CreativesService } from '../services/creatives.service';

import { Creative } from '../models/creative';

import {
  CreativesActionType,
  GetCreativesSuccess,
  GetCreativesFailed,
  GetCreativesByIdSuccess,
  GetCreativesByIdFailed,
  DeleteCreativeSuccess,
  DeleteCreativeFailed
} from './creatives.actions';

import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class CreativesEffects {
  creativesById: any;

  constructor(
    private actions$: Actions,
    private creativesService: CreativesService
  ) {}

  @Effect()
  getCreatives$ = this.actions$.pipe(
    ofType(CreativesActionType.GET_CREATIVES),
    switchMap(() =>
      this.creativesService.getAll().pipe(
        map((creatives: Array<Creative>) => new GetCreativesSuccess(creatives)),
        catchError(error => of(new GetCreativesFailed(error)))
      )
    )
  );

  @Effect()
  getCreativesById$ = this.actions$.pipe(
    ofType(CreativesActionType.GET_CREATIVES_BY_ID),
    switchMap(action =>
      this.creativesService.getAll().pipe(
        map((creatives: Array<Creative>) => {
          this.creativesById = creatives.find(
            creative => creative.parentId === action['payload']
          );
          creatives = this.creativesById;
          return new GetCreativesByIdSuccess(creatives);
        }),
        catchError(error => of(new GetCreativesByIdFailed(error)))
      )
    )
  );

  @Effect()
  deleteCreative$ = this.actions$.pipe(
    ofType(CreativesActionType.DELETE_CREATIVE),
    switchMap(action =>
      this.creativesService.deleteItem(action['payload']).pipe(
        map((id: number) => new DeleteCreativeSuccess(id)),
        catchError(error => of(new DeleteCreativeFailed(error)))
      )
    )
  );
}
