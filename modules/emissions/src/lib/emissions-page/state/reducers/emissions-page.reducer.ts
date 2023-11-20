import { ActionReducer, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { EmissionsPageActions } from '../actions/emissions-page.actions';
import { EmissionData, EmissionsDropdownOption, getChartDefinition } from '@shared';
import { EmissionsApiActions } from '../actions/emissions-api.actions';

export interface EmissionsPageState {
  selectedOption: EmissionsDropdownOption | null;
  emissionsData: EmissionData[];
  dropdownOptions: EmissionsDropdownOption[];
}

export const initialState: EmissionsPageState = {
  selectedOption: null,
  emissionsData: [],
  dropdownOptions: [],
};

export const emissionPageReducer: ActionReducer<EmissionsPageState> = createReducer(
  initialState,
  on(EmissionsPageActions.selectEmissionSet, (state: EmissionsPageState, action) => {
    return {
      ...state,
      selectedOption: action.option,
    };
  }),
  on(EmissionsApiActions.emissionsLoadedSuccess, (state: EmissionsPageState, action) => {
    return {
      ...state,
      emissionsData: action.emissionsData,
      dropdownOptions: action.dropdownOptions,
      selectedOption: { id: action.emissionsData[0].id },
    };
  })
);

export const selectEmissionsState = createFeatureSelector<EmissionsPageState>('emissions');
export const selectEmissionsData = createSelector(selectEmissionsState, (state: EmissionsPageState) => state.emissionsData);
export const selectSelectedOption = createSelector(selectEmissionsState, (state: EmissionsPageState) => state.selectedOption);
export const selectDropdownOptions = createSelector(selectEmissionsState, (state: EmissionsPageState) => state.dropdownOptions);
export const selectActiveChartData = createSelector(
  selectEmissionsData,
  selectSelectedOption,
  selectDropdownOptions,
  (emissionsData: EmissionData[], selectedOption: EmissionsDropdownOption | null, dropdownOptions: EmissionsDropdownOption[]) => {
    const activeChartDataIndex: number = emissionsData.findIndex((chart: EmissionData) => chart.id === selectedOption?.id);

    return dropdownOptions.length ? getChartDefinition(emissionsData[activeChartDataIndex], dropdownOptions[activeChartDataIndex].label || '') : null;
  }
);
