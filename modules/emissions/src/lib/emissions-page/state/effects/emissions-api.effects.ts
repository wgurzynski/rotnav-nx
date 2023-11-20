import { inject, Injectable } from '@angular/core';
import { EmissionsPageRestService } from '../../services/emissions-page-rest.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EmissionsApiActions } from '../actions/emissions-api.actions';
import { combineLatest, map, Observable, switchMap } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectVesselsRowData } from '@vessels';
import { EmissionData, generateDropdownOptions, VesselsRowData } from '@shared';

@Injectable()
export class EmissionsApiEffects {
  private readonly emissionPageRestService: EmissionsPageRestService = inject(EmissionsPageRestService);
  private readonly actions$: Actions = inject(Actions);
  private readonly store: Store = inject(Store);
  private readonly bulkVesselsAndEmissionsData$: Observable<[VesselsRowData[], EmissionData[]]> = combineLatest([
    this.store.select(selectVesselsRowData),
    this.emissionPageRestService.getEmissionsData(),
  ]);

  loadEmissions$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EmissionsApiActions.loadEmissions),
      switchMap(() => this.bulkVesselsAndEmissionsData$),
      map(([vesselsRowData, emissionsData]: [VesselsRowData[], EmissionData[]]) =>
        EmissionsApiActions.emissionsLoadedSuccess({ emissionsData, dropdownOptions: generateDropdownOptions(emissionsData, vesselsRowData) })
      )
    );
  });
}
