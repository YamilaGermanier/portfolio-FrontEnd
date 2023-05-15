import { Component, OnInit } from '@angular/core';
import { ProyectosService } from 'src/app/Servicios/proyectos.service';
import { AuthService } from 'src/app/Servicios/auth.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
proyectos:any;
adminLog=false;

constructor(protected auth:AuthService, private proyectServ:ProyectosService) {
  const authenticated = localStorage.getItem('adminLog');
  if (authenticated && authenticated === 'true') {
    this.adminLog= true;
  } else {
    this.adminLog = false;
  }
}



ngOnInit(): void {
  this.proyectServ.lista().subscribe(data => {
    this.proyectos = data;
  })
}

}
