import { MaisonsComponent } from './maisons/maisons.component';
import { TerrainsComponent } from './terrains/terrains.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitsComponent } from './produits.component';

const routes: Routes = [{
  path: '',
  component: ProduitsComponent,
  children: [
    {
      path: 'terrains',
      component: TerrainsComponent,
    },

    {
      path: 'maisons',
      component: MaisonsComponent,
    },

    {
      path: '',
      redirectTo: 'terrains',
      pathMatch: 'full',
    }

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
export class ProduitsRoutingModule { }
