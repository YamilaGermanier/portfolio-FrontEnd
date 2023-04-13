import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/Servicios/datos.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  //Para traer datos del json
  banner:any;

  constructor(private datos:DatosService) {}



  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.banner = data.banner;
    })
    
  }

}

