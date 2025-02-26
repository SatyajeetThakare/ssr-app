// import { bootstrapApplication } from '@angular/platform-browser';
// import { provideServiceWorker } from '@angular/service-worker';
// import { isDevMode } from '@angular/core';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, {
//   providers: [
//     // Register service worker only in production
//     provideServiceWorker('ngsw-worker.js', {
//       enabled: !isDevMode(), // Service Worker runs only in production
//     }),
//   ],
// }).catch(err => console.error(err));

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [provideServiceWorker('ngsw-worker.js', {
    enabled: true
  }), provideRouter(routes)]
})
  .catch((err) => console.error(err));