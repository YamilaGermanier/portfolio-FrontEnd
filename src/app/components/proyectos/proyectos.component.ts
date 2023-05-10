import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/Servicios/datos.service';
import { AuthService } from 'src/app/Servicios/auth.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
proyectos:any;

constructor(private datos:DatosService, protected auth:AuthService) {}



ngOnInit(): void {
  this.datos.getDatos().subscribe(data => {
    this.proyectos = data.proyectos;
  })
}

}
