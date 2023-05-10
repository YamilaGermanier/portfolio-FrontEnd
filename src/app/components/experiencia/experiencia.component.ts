import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/Servicios/datos.service';
import { AuthService } from 'src/app/Servicios/auth.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})

export class ExperienciaComponent implements OnInit {
  //Para traer datos de los array del json
  experiencias:any = [];

  constructor(private datos:DatosService, protected auth:AuthService) {}

  /*borrar(id:number):{
    if(id !=undefined){
      this.espeServ.delete(id).subscribe(data =>{
        this.verExperiecnia();
      }, err => {
        alrte("Algo falló. No se pudo eliminar la experiencia");
      }
    }
  }*/


  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.experiencias = data.experiencias;
    })
    
  }

}
