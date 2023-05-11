import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Servicios/auth.service';
import { BannerService } from 'src/app/Servicios/banner.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  //Para traer datos del json
  imagen:any;
  adminLog=false;
  
  constructor(protected auth:AuthService, private banServ:BannerService) {
    const authenticated = localStorage.getItem('adminLog');
    if (authenticated && authenticated === 'true') {
      this.adminLog= true;
    } else {
      this.adminLog = false;
    }
  }
  
  ngOnInit(): void {
   this.banServ.verBanner(1).subscribe(data =>{
    this.imagen = data.imagenBanner;
   });
  }
  

}

