import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { VesselsRowData } from '@shared';

export const VESSELS_API_STATE_NAME = 'Vessels Api';

export const VesselsApiActions = createActionGroup({
  source: VESSELS_API_STATE_NAME,
  events: {
    'Vessels Loaded Success': props<{ rowData: VesselsRowData[] }>(),
    'Vessels Load Failed': emptyProps(),
    'Load Vessels': emptyProps(),
  },
});
