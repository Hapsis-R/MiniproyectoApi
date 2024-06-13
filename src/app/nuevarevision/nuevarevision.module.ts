import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevarevisionPageRoutingModule } from './nuevarevision-routing.module';

import { NuevarevisionPage } from './nuevarevision.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevarevisionPageRoutingModule
  ],
  declarations: [NuevarevisionPage]
})
export class NuevarevisionPageModule {}
