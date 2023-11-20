import { ActionReducer, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { VesselsApiActions } from '../actions/vessels-api.actions';
import { VesselsRowData } from '@shared';

export interface VesselsPageState {
  rowData: VesselsRowData[];
}

export const initialState: VesselsPageState = {
  rowData: [],
};

export const vesselsPageReducer: ActionReducer<VesselsPageState> = createReducer(
  initialState,
  on(VesselsApiActions.vesselsLoadedSuccess, (state: VesselsPageState, action) => {
    return {
      ...state,
      rowData: action.rowData,
    };
  })
);

export const selectVesselsState = createFeatureSelector<VesselsPageState>('vessels');
export const selectVesselsRowData = createSelector(selectVesselsState, (state: VesselsPageState) => state.rowData);
