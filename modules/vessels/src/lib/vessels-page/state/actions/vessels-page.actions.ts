import { createActionGroup, emptyProps } from '@ngrx/store';

export const VESSELS_PAGE_STATE_NAME = 'Vessels Page';

export const VesselsPageActions = createActionGroup({
  source: VESSELS_PAGE_STATE_NAME,
  events: {
    Enter: emptyProps(),
  },
});
