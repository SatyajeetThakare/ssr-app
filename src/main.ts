import { bootstrapApplication } from '@angular/platform-browser';
import { provideServiceWorker } from '@angular/service-worker';
import { isDevMode } from '@angular/core';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    // Register service worker only in production
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(), // Service Worker runs only in production
    }),
  ],
}).catch(err => console.error(err));
