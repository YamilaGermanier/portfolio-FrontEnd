import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/Servicios/datos.service';
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

 constructor(private servHab:HabilidadesService, protected auth:AuthService) {}



ngOnInit(): void {
  this.cargarHabilidad();
}
    
cargarHabilidad():void {
  this.servHab.lista().subscribe(data => {this.habilidades = data})
}

}

