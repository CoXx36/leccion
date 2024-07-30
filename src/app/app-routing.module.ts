import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'lugares',
    pathMatch: 'full'
  },
  {
    path: 'lugares',
    children: [
      {
        path: '',
        loadChildren: () => import('./lugares/lugares.module').then(m => m.LugaresPageModule)
      },
      {
        path: ':LugarId',
        loadChildren: () => import('./lugares/detalle-lugar/detalle-lugar.module').then(m => m.DetalleLugarPageModule)
      },
      {
        path: 'modificar-lugar/:LugarId',
        loadChildren: () => import('./lugares/modificar-lugar/modificar-lugar.module').then(m => m.ModificarLugaPageModule)
      }
    ]
  },
  {
    path: 'insertar-lugar',
    loadChildren: () => import('./lugares/insertar-lugar/insertar-lugar.module').then(m => m.InsertarLugarPageModule)
  },
  {
    path: 'accordion',
    loadChildren: () => import('./accordion/accordion.module').then( m => m.AccordionPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
