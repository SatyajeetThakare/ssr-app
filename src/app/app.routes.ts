import { Routes } from '@angular/router';
import { FirstPwaComponent } from './first-pwa/first-pwa.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', component: FirstPwaComponent }
];
