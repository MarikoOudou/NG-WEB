import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'pages',
    pathMatch: 'full'
  },
  /*{
    path: '**',
    redirectTo: 'login'
  }*/
];

export const routing = RouterModule.forRoot(appRoutes);
