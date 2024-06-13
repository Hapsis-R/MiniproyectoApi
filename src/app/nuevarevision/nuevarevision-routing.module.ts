import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevarevisionPage } from './nuevarevision.page';

const routes: Routes = [
  {
    path: '',
    component: NuevarevisionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevarevisionPageRoutingModule {}
