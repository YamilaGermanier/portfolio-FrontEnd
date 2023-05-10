import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/Servicios/datos.service';
import { AuthService } from 'src/app/Servicios/auth.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
persona:any;

constructor(private datos:DatosService, protected auth:AuthService) {}

ngOnInit(): void {
  this.datos.getDatos().subscribe(data => {
  this.persona = data.persona;
  })

}

}
