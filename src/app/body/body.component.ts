import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  categorias: any = [{ codigo: 0, texto: "Todos" }, { codigo: 1, texto: "politica" }, { codigo: 2, texto: "Educacion" }, { codigo: 3, texto: "Deportes" }];
  temporal: any;
  noticias: any = [{ categoria: { 
    codigo: 1, 
    texto: "politica" }, 
    titulo: "Cruce de cartas entre Petro y Claudia López: la alcaldesa no se retracta", 
    texto: "El senador y precandidato presidencial Gustavo Petro radicó, el pasado 20 de agosto, un documento señalando que las declaraciones de la alcaldesa de Bogotá, Claudia López, sobre Gustavo Bolívar y sobre Colombia Humana violan sus derechos al buen nombre y estigmatizan. \n Petro saca algunas frases de una entrevista que dio la alcaldesa y en atención eso, negando cualquier apoyo o relación con los actos vandálicos pide formalmente que la alcaldesa se retracte de acusar al petrismo de radicalizar jóvenes para cometer actos vandálicos en Bogotá y copia el documento a la Procuraduría.", 
    imagen: "../../assets/img3.jpg", 
    sueldo: 1000},
    
  { categoria: { 

    codigo: 1, 
    texto: "politica" }, 
    titulo: "Los talibanes se adjudican la victoria en Panjshir, pero las fuerzas de la resistencia dicen que aún controlan una posición estratégica en el valle", 
    texto: "Los talibanes se adjudicaron la victoria en la provincia afgana de Panjshir, y un portavoz dijo que la región había sido 'completamente conquistada' tras dos semanas de feroces combates con un grupo de resistencia. \n Panjshir ha sido el último bastión entre las 34 provincias de Afganistán que se ha resistido a los talibanes. Si la afirmación es cierta, significaría que los talibanes ahora controlan todas las provincias afganas.", imagen: "https://cdn.pixabay.com/photo/2014/11/13/06/12/boy-529067_960_720.jpg",
    sueldo: 3600 },
  { categoria: { 
    
    codigo: 2, 
    texto: "Educacion" }, 
    titulo: "Sena abre 250.000 cupos para estudiar inglés gratis", 
    texto: "El programa cuenta con 10 niveles de formación relacionados con el Marco Común Europeo de Referencia para las Lenguas (MCERL). Los cursos inician con un nivel para principiantes y al finalizar la totalidad del programa se espera que el aprendiz pueda desarrollar un nivel intermedio de competencia en inglés conocido como B1.", imagen: "../../assets/img3.jpg",
    sueldo: 1620 },
  { categoria: { 

    codigo: 3, 
    texto: "Deportes" }, 
    titulo: "Colombia volvió a pecar por falta de contundencia, pero sacó otro punto", 
    texto: "Otra vez con sorpresas en la formación titular (dos delanteros, Borja y Borré, y la aparición de Luis Sinisterra en lugar de Luis Díaz), Reinaldo Rueda planteó un partido buscando, primero, la seguridad en la defensa. Luego, tratar de aprovechar para buscar un gol a punta de salidas rápidas.\n En el papel, el tema funcionaba: la línea de cuatro zagueros parecía estar bien y el doble tapón en la mitad daba algo de seguridad. Pero el asunto no funcionaba del todo de la mitad de cancha hacia adelante: Borré y Sinisterra se veían perdidos; Cuadrado hacía un buen juego, pero se quedó sin socio por su banda porque Stefan Medina tiene mucha menos salida que Daniel Muñoz, y Borja alternó buenas y malas, aunque tuvo la única opción de Colombia en la primera etapa, un remate desde el borde del área que se estrelló en un rival antes de golpear el poste e irse afuera.", 
    imagen: "../../assets/img3.jpg" ,
    sueldo: 8755}];
  constructor() {
    this.temporal = this.noticias;
   }

  ngOnInit(){
  }
  
  eventoControl(evento: any){
    if (evento.target.value == 0){
      this.noticias = this.temporal;
    }else{
      this.noticias = this.temporal.filter( (item: any)=> {
        return item.categoria.codigo == evento.target.value;
      });
    }
    // console.log(item.categoria.codigo);
  }
  

}
