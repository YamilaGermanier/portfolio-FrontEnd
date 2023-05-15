import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Servicios/auth.service';
import { Habilidades } from 'src/app/Entidades/habilidades';
import { HabilidadesService } from 'src/app/Servicios/habilidades.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
habilidades:Habilidades[]=[];
adminLog=false;

ngOnInit(): void {
  this.cargarHabilidad();
}
    
cargarHabilidad():void {
  this.servHab.lista().subscribe(data => {this.habilidades = data})
}

constructor(protected auth:AuthService, private servHab:HabilidadesService) {
  const authenticated = localStorage.getItem('adminLog');
  if (authenticated && authenticated === 'true') {
    this.adminLog= true;
  } else {
    this.adminLog = false;
  }
}


}

