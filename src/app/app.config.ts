import { APP_INITIALIZER, ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideStore, Store } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ErrorInterceptor } from '@shared';
import { emissionPageReducer } from '@emissions';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { vesselsPageReducer, VesselsApiActions, VesselsApiEffects } from '@vessels';
import { EmissionsApiEffects } from '@emissions';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    provideHttpClient(),
    provideEffects(EmissionsApiEffects, VesselsApiEffects),
    provideStore({ emissions: emissionPageReducer, vessels: vesselsPageReducer }),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
    provideAnimations(),
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    {
      provide: APP_INITIALIZER,
      useFactory: (store: Store) => {
        return () => {
          store.dispatch(VesselsApiActions.loadVessels());
        };
      },
      multi: true,
      deps: [Store],
    },
  ],
};
