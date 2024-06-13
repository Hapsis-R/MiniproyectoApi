import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RevisionesPageRoutingModule } from './revisiones-routing.module';

import { RevisionesPage } from './revisiones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RevisionesPageRoutingModule
  ],
  declarations: [RevisionesPage]
})
export class RevisionesPageModule {}
