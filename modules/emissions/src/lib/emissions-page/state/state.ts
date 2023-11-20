import { ActionReducerMap, createFeatureSelector, MetaReducer, StoreModule } from '@ngrx/store';
import * as fromEmissions from './reducers/emissions-page.reducer';
import { NgModule } from '@angular/core';

export const FEATURE_KEY = 'emissions';
export interface State {
  emissions: fromEmissions.EmissionsPageState;
}

export const reducers: ActionReducerMap<State> = {
  emissions: fromEmissions.emissionPageReducer,
};

export const metaReducers: MetaReducer<State>[] = [];

@NgModule({
  imports: [StoreModule.forFeature(FEATURE_KEY, reducers, { metaReducers })],
})
export class StateEmissionsModule {}

export const selectEmissionsState = createFeatureSelector<State>(FEATURE_KEY);
