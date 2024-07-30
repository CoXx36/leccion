import { Component, OnInit } from '@angular/core';
import { Sitios } from '../Entidades/Sitio';
import { LugaresService } from '../../Service/lugares.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-lugar',
  templateUrl: './detalle-lugar.page.html',
  styleUrls: ['./detalle-lugar.page.scss'],
})
export class DetalleLugarPage implements OnInit {
  Lugar: Sitios;
  
  constructor(
    private oser: LugaresService,
    private actRoute: ActivatedRoute,
    private Oroute: Router,
    private Ocont: AlertController) { }

  ngOnInit() {
    this.actRoute.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('LugarId');
      this.Lugar = this.oser.getLugar(id);
    })
  }

  async ModificarLugar() {
    const lugarId = this.Lugar.Codigo;
    this.Oroute.navigate(['/insertar-lugar', lugarId]);
  }

  async EliminarLugar() {
    const aler = await this.Ocont.create({
      header: "Eliminar Lugar",
      message: "Desea eliminar lugar de la lista",
      buttons: [{
        text: "Cancelar",
        role: "cancel"
      },
      {
        text: "Delete",
        handler: () => {
          this.oser.DeleteLugar(this.Lugar.Codigo);
          this.Oroute.navigateByUrl("/lugares");
        }
      }
      ]
    });
    await aler.present();
  }
}