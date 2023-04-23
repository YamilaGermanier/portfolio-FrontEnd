import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/Servicios/datos.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
sobreMi:any;

constructor(private datos:DatosService) {}

ngOnInit(): void {
  this.datos.getDatos().subscribe(data => {
  this.sobreMi = data.sobreMi;
  })

}


}
