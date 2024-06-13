import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'vehiculos',
    loadChildren: () => import('./vehiculos/vehiculos.module').then( m => m.VehiculosPageModule)
  },
  {
    path: 'nuevovehiculo',
    loadChildren: () => import('./nuevovehiculo/nuevovehiculo.module').then( m => m.NuevovehiculoPageModule)
  },
  {
    path: 'editarvehiculo',
    loadChildren: () => import('./editarvehiculo/editarvehiculo.module').then( m => m.EditarvehiculoPageModule)
  },
  {
    path: 'revisionesvehiculo',
    loadChildren: () => import('./revisiones/revisiones.module').then( m => m.RevisionesPageModule)
  },
  {
    path: 'nuevarevision',
    loadChildren: () => import('./nuevarevision/nuevarevision.module').then( m => m.NuevarevisionPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
