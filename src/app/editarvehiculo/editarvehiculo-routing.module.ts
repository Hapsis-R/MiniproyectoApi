import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarvehiculoPage } from './editarvehiculo.page';

const routes: Routes = [
  {
    path: '',
    component: EditarvehiculoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarvehiculoPageRoutingModule {}
