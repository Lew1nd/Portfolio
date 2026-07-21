import { Routes } from '@angular/router';

export const routes: Routes = 
[
    //Por defecto
    { path: '', redirectTo: 'home', pathMatch: 'full' },

    //Rutas
    { path: 'home', loadComponent:() => import('./pages/home/home').then(m => m.Home) },
    { path: 'aboutme', loadComponent:() => import('./pages/aboutme/aboutme').then(m => m.Aboutme) },
    { path: 'contact', loadComponent:() => import('./pages/contact/contact').then(m => m.Contact) },

    { path: 'projects/:slug', loadComponent: () => import('./pages/projects/projects').then(m => m.Projects) },

    // Ruta comodín
    { path: '**', redirectTo: 'home' }

];
