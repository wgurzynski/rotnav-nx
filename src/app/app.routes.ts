import { Route } from '@angular/router';
import { ROUTE_NAMES } from '@shared';

export const appRoutes: Route[] = [
  {
    path: ROUTE_NAMES.VESSELS_PAGE,
    // providers: [provideState('vessels', vesselsPageReducer)],
    loadComponent: () => import('@vessels').then((c) => c.VesselsPageComponent),
  },
  {
    path: ROUTE_NAMES.EMISSIONS_PAGE,
    loadComponent: () => import('@emissions').then((c) => c.EmissionsPageComponent),
  },
  {
    path: '',
    redirectTo: ROUTE_NAMES.VESSELS_PAGE,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: ROUTE_NAMES.VESSELS_PAGE,
    pathMatch: 'full',
  },
];
