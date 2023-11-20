import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmissionsDropdownOption, EmissionChartStructure } from '@shared';
import { Store } from '@ngrx/store';
import { EmissionsPageActions } from './state/actions/emissions-page.actions';
import { EmissionsApiActions } from './state/actions/emissions-api.actions';
import { EmissionsPageState, selectActiveChartData, selectDropdownOptions, selectSelectedOption } from './state/reducers/emissions-page.reducer';

@Injectable({ providedIn: 'any' })
export class EmissionsPageFacade {
  private readonly store: Store<EmissionsPageState> = inject(Store);
  readonly selectedDropdownOption$: Observable<EmissionsDropdownOption | null> = this.store.select(selectSelectedOption);
  readonly dropdownOptions$: Observable<EmissionsDropdownOption[]> = this.store.select(selectDropdownOptions);
  readonly activeChartData$: Observable<EmissionChartStructure | null> = this.store.select(selectActiveChartData);

  changeActiveEmissionSet(option: EmissionsDropdownOption): void {
    this.store.dispatch(EmissionsPageActions.selectEmissionSet({ option }));
  }

  onEnter(): void {
    this.store.dispatch(EmissionsApiActions.loadEmissions());
  }
}
