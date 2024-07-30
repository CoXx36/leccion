import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModificarLugarPage } from './modificar-lugar.page';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModificarLugarPageRoutingModule } from './modificar-lugar-routing.module';

@NgModule({
  declarations: [ModificarLugarPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarLugarPageRoutingModule
  ]
})
export class ModificarLugaPageModule { }
