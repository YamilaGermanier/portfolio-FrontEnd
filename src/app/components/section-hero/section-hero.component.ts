import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/Servicios/datos.service';

@Component({
  selector: 'app-section-hero',
  templateUrl: './section-hero.component.html',
  styleUrls: ['./section-hero.component.css']
})
export class SectionHeroComponent implements OnInit {
  nombre: any;
  apellido: any;
  mensaje: any;
  titulo: any;
  ciudad: any;
  imagenPerfil: any;
  descripcion_perfil:any;

  constructor(private datos:DatosService) {}

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data=> {
      this.nombre = data.nombre;
      this.apellido = data.apellido;
      this.mensaje = data.mensaje;
      this.titulo = data.titulo;  
      this.ciudad = data.ciudad;
      this.imagenPerfil = data.imagenPerfil; 
      this.descripcion_perfil = data.descripcionPerfil;
    })
  }

}
