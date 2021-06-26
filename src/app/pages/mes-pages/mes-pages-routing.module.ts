import { EquipeComponent } from './equipe/equipe.component';
import { BlogsComponent } from './blogs/blogs.component';
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
      path: 'blog',
      component: BlogsComponent,
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

    /*{
      path: 'tabs',
      component: TabsComponent,
      children: [
        {
          path: '',
          redirectTo: 'tab1',
          pathMatch: 'full',
        },
        {
          path: 'tab1',
          component: Tab1Component,
        },
        {
          path: 'tab2',
          component: Tab2Component,
        },
      ],
    },*/
  ],

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MesPagesRoutingModule { }
