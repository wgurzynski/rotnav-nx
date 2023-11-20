import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { EmissionsDropdownOption } from '@shared';

export const EMISSIONS_PAGE_STATE_NAME = 'Emission Page';

export const EmissionsPageActions = createActionGroup({
  source: EMISSIONS_PAGE_STATE_NAME,
  events: {
    Enter: emptyProps(),
    'Select Emission Set': props<{ option: EmissionsDropdownOption }>(),
  },
});
