import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../Service/lugares.service';
import { Sitios } from './Entidades/Sitio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.page.html',
  styleUrls: ['./lugares.page.scss'],
})
export class LugaresPage implements OnInit {
  ListaSitios: Sitios[];
  constructor(private Oser: LugaresService, private Oroute: Router) { }

  ngOnInit() {
    this.ListaSitios = this.Oser.getLugares();
  }
  ionViewWillEnter() {
    this.ListaSitios = this.Oser.getLugares();
  }
  PaginaInsertarLugar() {
    this.Oroute.navigate(['/insertar-lugar']);
  }
}
