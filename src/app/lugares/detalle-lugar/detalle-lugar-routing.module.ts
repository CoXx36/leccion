import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleLugarPage } from './detalle-lugar.page';
import { ModificarLugarPage } from '../modificar-lugar/modificar-lugar.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleLugarPage
  },
  {
    path: 'modificar-lugar/:id',
    component: ModificarLugarPage, // Reemplaza "ModificarLugarPage" con el nombre correcto de tu componente de edición
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleLugarPageRoutingModule {}
