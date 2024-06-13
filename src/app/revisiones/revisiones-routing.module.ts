import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RevisionesPage } from './revisiones.page';

const routes: Routes = [
  {
    path: '',
    component: RevisionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RevisionesPageRoutingModule {}
