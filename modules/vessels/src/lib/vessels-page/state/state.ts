import { ActionReducerMap, createFeatureSelector, MetaReducer, StoreModule } from '@ngrx/store';
import * as fromVessels from './reducers/vessels-page.reducer';
import { NgModule } from '@angular/core';

export const FEATURE_KEY = 'vessels';
export interface State {
  emissions: fromVessels.VesselsPageState;
}

export const reducers: ActionReducerMap<State> = {
  emissions: fromVessels.vesselsPageReducer,
};

export const metaReducers: MetaReducer<State>[] = [];

@NgModule({
  imports: [StoreModule.forFeature(FEATURE_KEY, reducers, { metaReducers })],
})
export class StateVesselsModule {}

export const selectVesselsState = createFeatureSelector<State>(FEATURE_KEY);
