import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/Servicios/datos.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})

export class ExperienciaComponent implements OnInit {
  //Para traer datos de los array del json
  experiencias:any = [];

  constructor(private datos:DatosService) {}



  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.experiencias = data.experiencias;
    })
    
  }

}