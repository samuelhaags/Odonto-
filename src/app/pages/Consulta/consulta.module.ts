import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { consultaPageRoutingModule } from './consulta-routing.module';

import { consultaPage } from './consulta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    consultaPageRoutingModule
  ],
  declarations: [consultaPage]
})
export class consultaPageModule {}
