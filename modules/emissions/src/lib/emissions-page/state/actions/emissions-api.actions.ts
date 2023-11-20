import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { EmissionData, EmissionsDropdownOption } from '@shared';

export const EMISSIONS_API_STATE_NAME = 'Emission Api';

export const EmissionsApiActions = createActionGroup({
  source: EMISSIONS_API_STATE_NAME,
  events: {
    'Emissions Loaded Success': props<{ emissionsData: EmissionData[]; dropdownOptions: EmissionsDropdownOption[] }>(),
    'Emissions Load Failed': emptyProps(),
    'Load Emissions': emptyProps(),
  },
});
