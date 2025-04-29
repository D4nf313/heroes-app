import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'personajes',
    loadChildren: () => import('./heroes/personajes.routes'),
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
