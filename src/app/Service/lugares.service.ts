import { Injectable } from '@angular/core';
import { Sitios } from '../lugares/Entidades/Sitio';

@Injectable({
  providedIn: 'root'
})
export class LugaresService {
  private Lista: Sitios[] = [
    {
      Codigo: "1",
      Titulo: "Guayakill",
      ImagenURL: "https://media.istockphoto.com/id/1153234570/es/foto/colorida-colina-de-santa-ana-en-guayaquil-desde-el-r%C3%ADo-guayas.jpg?s=612x612&w=0&k=20&c=HtLW4TJ9bP1dxAHyuMe5ZWUZj3-m70AyIFch47aWXV8=",
      Comentario: ["¡Bienvenido a la joya secreta de la costa ecuatoriana! Guayaquil", "con su vibrante vida nocturna y emocionante atmósfera urbana", "es el lugar perfecto para los amantes de la adrenalina... y del peligro. "]
    },
    {
      Codigo: "2",
      Titulo: "Esmeraldas",
      ImagenURL: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTRaUdUpx3pkrxPkyetzdOJWcBcWSrndKeCwU7t_PS2p12BLJHgkBJeAhwcDs0W5rZEWiW2ceXXwE39UfNvPfRsqU5PwXRzB07sKa9cVbTqp4ttLuqiSX6PUTT7Ph43VKg9mpDh5G9DPAV/s1600/5-playas-de-Esmeraldas-que-te-enamoraran.jpg",
      Comentario: ["Sumérgete en la exuberante belleza natural de Esmeraldas", "donde la jungla y el océano se encuentran para ofrecerte una experiencia única..." ," ¡y peligrosa! Disfruta de sus playas vírgenes y la cálida hospitalidad de su gente"," pero ten cuidado, los rumores de peligros no son solo rumores. "]
    },
    {
      Codigo: "3",
      Titulo: "Quito",
      ImagenURL: "https://blog.uber-cdn.com/cdn-cgi/image/width=2160,quality=80,onerror=redirect,format=auto/wp-content/uploads/2018/09/EC_X-lugares-para-visitar-en-Quito-que-no-pueden-faltar-en-tu-lista.jpg",
      Comentario: ["¡Descubre la vibrante capital de los Andes!",
    "Quito, con su impresionante arquitectura colonial y un paisaje montañoso",
    "es el destino ideal para quienes buscan una experiencia cultural enriquecedora... y una dosis ocasional de caos.",
    "Con sus calles empedradas y plazas llenas de vida, estarás rodeado de encanto histórico",
    "y quizás un poco de tráfico inesperado o el ocasional deslizamiento de tierra.",
    "¡La combinación perfecta de cultura y adrenalina!"]
      },
    {
      Codigo: "4",
      Titulo: "Babahoyo",
      ImagenURL: "https://www.conferenciaepiscopal.ec/templates/yootheme/cache/0b/Catedral_de_Babahoyo-0bd10509.jpeg",
      Comentario: ["¡Bienvenido a la vibrante y acogedora ciudad de Babahoyo!",
    "Con su rica historia y vibrante cultura local,Babahoyo es el lugar perfecto para quienes buscan",
    " una experiencia auténtica en la costa ecuatoriana... y un toque de peligro.",
    "Aunque sus calles están llenas de vida y color,",
    "la emoción viene con una advertencia: el riesgo de ser víctima de un sicariato ",
    "o un robo puede estar presente.¡Una verdadera aventura con un poco de adrenalina en cada esquina!"]
    }
  ]
  constructor() { }
  getLugares(): Sitios[] {
    return [...this.Lista];
  }

  getLugar(cod: string) {
    return {
      ...this.Lista.find(pl => { return pl.Codigo === cod })
    };
  }

  InsertLugar(Titulo, ImagenURL, Comentario: string[]) {
    this.Lista.push({
      Codigo: this.Lista.length + 1 + " ",
      Titulo,
      ImagenURL,
      Comentario
    });
  }

  UpdateLugar(cod: string, nTitulo: string, nImagenURL: string, nComentario: string) {
    const lugarExistente = this.Lista.findIndex(pl => pl.Codigo === cod);
    const comentarioArray = nComentario.split(',');
    if (lugarExistente !== -1) {
      this.Lista[lugarExistente].Titulo = nTitulo;
      this.Lista[lugarExistente].ImagenURL = nImagenURL;
      this.Lista[lugarExistente].Comentario = comentarioArray;
    }
  }

  DeleteLugar(cod: string) {
    this.Lista = this.Lista.filter(pl => { return pl.Codigo !== cod; });
  }
}
