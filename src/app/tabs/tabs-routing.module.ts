import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'vehiculos',
        loadChildren: () => import('../vehiculos/vehiculos.module').then(m => m.VehiculosPageModule)
      },
      {
        path: 'nuevovehiculo',
        loadChildren: () => import('../nuevovehiculo/nuevovehiculo.module').then(m => m.NuevovehiculoPageModule)
      },
      {
        path: 'editarvehiculo/:id',
        loadChildren: () => import('../editarvehiculo/editarvehiculo.module').then(m => m.EditarvehiculoPageModule)
      },
      {
        path: 'revisionesvehiculo/:id',
        loadChildren: () => import('../revisiones/revisiones.module').then(m => m.RevisionesPageModule)
      },
      {
        path: 'nuevarevision/:id',
        loadChildren: () => import('../nuevarevision/nuevarevision.module').then(m => m.NuevarevisionPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/vehiculos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
