import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/Servicios/datos.service';
import { AuthService } from 'src/app/Servicios/auth.service';
import { ExperienciasService } from 'src/app/Servicios/experiencias.service';
import { Experiencias } from 'src/app/Entidades/experiencias';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})

export class ExperienciaComponent implements OnInit {
  experiencias: Experiencias[]=[]
  adminLog=false;

  constructor(protected auth:AuthService, private expeServ:ExperienciasService) {
    const authenticated = localStorage.getItem('adminLog');
    if (authenticated && authenticated === 'true') {
      this.adminLog= true;
    } else {
      this.adminLog = false;
    }
  }

  ngOnInit(): void {
    this.expeServ.lista().subscribe(data=>{
      this.experiencias = data;
    })
  }

}


  /*borrar(id:number):{
    if(id !=undefined){
      this.espeServ.delete(id).subscribe(data =>{
        this.verExperiecnia();
      }, err => {
        alrte("Algo falló. No se pudo eliminar la experiencia");
      }
    }
  }*/


