import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Servicios/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  adminLog=false;

  constructor(protected auth:AuthService) {
    const authenticated = localStorage.getItem('adminLog');
    if (authenticated && authenticated === 'true') {
      this.adminLog= true;
    } else {
      this.adminLog = false;
    }
  }
  
  ngOnInit(): void {}


  logout():void{
    localStorage.removeItem('adminLog');
  }
}

