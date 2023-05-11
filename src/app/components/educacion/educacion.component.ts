import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Servicios/auth.service';
import { TitulosService } from 'src/app/Servicios/titulos.service';
import { CapacitacionesService } from 'src/app/Servicios/capacitaciones.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
titulos:any;
capacitaciones:any;
adminLog=false;

constructor(protected auth:AuthService, private titulServ: TitulosService, private capServ: CapacitacionesService){}
  /*const authenticated = localStorage.getItem('adminLog');
  if (authenticated && authenticated === 'true') {
    this.adminLog= true;
  } else {
    this.adminLog = false;
  }*/


ngOnInit(): void {
  this.titulServ.lista().subscribe(data => {
    this.titulos = data;})
  this.capServ.lista().subscribe(data => {
    this.capacitaciones = data;});
  
}
}
