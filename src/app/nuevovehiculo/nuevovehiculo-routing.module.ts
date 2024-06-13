import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevovehiculoPage } from './nuevovehiculo.page';

const routes: Routes = [
  {
    path: '',
    component: NuevovehiculoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevovehiculoPageRoutingModule {}
