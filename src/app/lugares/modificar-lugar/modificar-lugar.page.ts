import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../../Service/lugares.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Sitios } from '../Entidades/Sitio';

@Component({
  selector: 'app-modificar-lugar',
  templateUrl: './modificar-lugar.page.html',
  styleUrls: ['./modificar-lugar.page.scss'],
})
export class ModificarLugarPage implements OnInit {
  Lugar: Sitios;

  tit: string;
  img: string;
  com: string;

  constructor(
    private actRoute: ActivatedRoute,
    private oser: LugaresService,
    private Oroute: Router
  ) { }

  ngOnInit() {
    this.actRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('LugarId');
      this.Lugar = this.oser.getLugar(id);
      this.img = this.Lugar.ImagenURL;
      this.tit = this.Lugar.Titulo;
      this.com = this.Lugar.Comentario.join(',');
    })
  }

  ModificarLugar() {
    this.oser.UpdateLugar(this.Lugar.Codigo, this.tit, this.img, this.com);
    this.Oroute.navigate(['/lugares', this.Lugar.Codigo]);
  }
}
