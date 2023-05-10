import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/Servicios/datos.service';
import { AuthService } from 'src/app/Servicios/auth.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
titulos:any;
capacitaciones:any;

constructor(private datos:DatosService, protected auth:AuthService){}

ngOnInit(): void {
  this.datos.getDatos().subscribe(data => {
    this.titulos = data.titulos;
    this.capacitaciones = data.capacitaciones;
  })
  
}
}