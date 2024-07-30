import { Component, OnInit } from '@angular/core';
import { Sitios } from '../lugares/Entidades/Sitio';
import { LugaresService } from '../Service/lugares.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.page.html',
  styleUrls: ['./accordion.page.scss'],
})
export class AccordionPage implements OnInit {
  ListaSitios: Sitios[];
  constructor(private Oser: LugaresService, private Oroute: Router) { }

  ngOnInit() {
    this.ListaSitios = this.Oser.getLugares();
  }
  ionViewWillEnter() {
    this.ListaSitios = this.Oser.getLugares();
  }
}
