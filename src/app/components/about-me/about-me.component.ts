import { Component, OnInit } from '@angular/core';
import { AboutMeService } from 'src/app/Servicios/about-me.service';
import { AuthService } from 'src/app/Servicios/auth.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
aboutMe:any;
adminLog=false;

constructor(protected auth:AuthService, private about:AboutMeService) {
  const authenticated = localStorage.getItem('adminLog');
  if (authenticated && authenticated === 'true') {
    this.adminLog= true;
  } else {
    this.adminLog = false;
  }
}


ngOnInit(): void {
  this.about.verSobreMi(1).subscribe(data => {
    this.aboutMe = data});
  }

}