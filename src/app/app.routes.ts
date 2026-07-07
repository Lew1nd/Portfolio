import { Routes } from '@angular/router';

export const routes: Routes = 
[
    //Por defecto
    { path: '', redirectTo: 'home', pathMatch: 'full' },

    { path: 'home', loadComponent:() => import('./components/home/home').then(m => m.Home) },

    // Ruta comodín
    { path: '**', redirectTo: 'home' }

];
