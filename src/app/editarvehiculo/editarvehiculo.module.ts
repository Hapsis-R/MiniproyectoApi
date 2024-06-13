import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarvehiculoPageRoutingModule } from './editarvehiculo-routing.module';

import { EditarvehiculoPage } from './editarvehiculo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarvehiculoPageRoutingModule
  ],
  declarations: [EditarvehiculoPage]
})
export class EditarvehiculoPageModule {}
