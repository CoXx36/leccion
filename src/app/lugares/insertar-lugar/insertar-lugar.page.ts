import { Component, OnInit, ViewChild } from '@angular/core';
import { LugaresService } from '../../Service/lugares.service';
import { Router } from '@angular/router';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-insertar-lugar',
  templateUrl: './insertar-lugar.page.html',
  styleUrls: ['./insertar-lugar.page.scss'],
})
export class InsertarLugarPage implements OnInit {

  @ViewChild('tit', { static: false }) titInput: IonInput;
  @ViewChild('img', { static: false }) imgInput: IonInput;
  @ViewChild('com', { static: false }) comInput: IonInput;

  constructor(
    private oser: LugaresService, 
    private Oroute: Router) { }

  ngOnInit() {
  }

  InsertarLugar() {
    const tit = this.titInput.value as string;
    const img = this.imgInput.value as string;
    const com = this.comInput.value as string;
    const comentario = [com];

    this.oser.InsertLugar(tit, img, comentario);
    this.Oroute.navigate(['/lugares']);
  }
}

