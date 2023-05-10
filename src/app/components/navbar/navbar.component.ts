import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Servicios/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  constructor(protected auth:AuthService){}
  
  ngOnInit(): void {}

}

