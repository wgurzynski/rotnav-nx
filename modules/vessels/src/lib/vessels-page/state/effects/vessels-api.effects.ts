import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { VesselsApiActions } from '../actions/vessels-api.actions';
import { VesselsPageRestService } from '../../services/vessels-page-rest.service';
import { VesselsRowData } from '@shared';

@Injectable()
export class VesselsApiEffects {
  private readonly vesselsPageRestService: VesselsPageRestService = inject(VesselsPageRestService);
  private readonly actions$: Actions = inject(Actions);

  loadEmissions$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(VesselsApiActions.loadVessels),
      switchMap(() => this.vesselsPageRestService.getRowData().pipe(map((rowData: VesselsRowData[]) => VesselsApiActions.vesselsLoadedSuccess({ rowData }))))
    );
  });
}
