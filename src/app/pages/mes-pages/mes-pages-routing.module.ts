import { EquipeComponent } from './equipe/equipe.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesPagesComponent } from './mes-pages.component';


const routes: Routes = [{
  path: '',
  component: MesPagesComponent,
  children: [
    {
      path: 'accueil',
      component: AccueilComponent,
    },

    {
      path: 'equipe',
      component: EquipeComponent,
    },

    {
      path: '',
      redirectTo: 'accueil',
      pathMatch: 'full',
    },

  ],

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MesPagesRoutingModule { }
