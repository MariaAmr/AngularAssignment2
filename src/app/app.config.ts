import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideLottieOptions } from 'ngx-lottie';
import { provideServerRendering } from '@angular/ssr';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(), 
    provideZonelessChangeDetection(),
    provideRouter(routes,withHashLocation()),
    provideClientHydration(withEventReplay()),
    provideHttpClient(),
    provideLottieOptions({
      player: () => import("lottie-web"),
    }),
  ],
};
