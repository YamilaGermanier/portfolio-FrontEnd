import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Entidades/persona-entity';
import { AuthService } from 'src/app/Servicios/auth.service';
import { PersonaService } from 'src/app/Servicios/persona.service';

@Component({
  selector: 'app-section-hero',
  templateUrl: './section-hero.component.html',
  styleUrls: ['./section-hero.component.css']
})
export class SectionHeroComponent implements OnInit {
persona: Persona = {nombre:'', apellido: '', titulo: '', ciudad:'', mensaje:'',imagenPerfil:''}
 adminLog=false;

 constructor(protected auth:AuthService, private persoServ: PersonaService) {
  const authenticated = localStorage.getItem('adminLog');
   if (authenticated && authenticated === 'true') {
     this.adminLog= true;
   } else {
     this.adminLog = false;
   }
 }

 ngOnInit(): void {
  this.persoServ.buscarPersona(1).subscribe(data => {
    this.persona = data;
});
}


  /*nombre: any;
  apellido: any;
  mensaje: any;
  titulo: any;
  ciudad: any;
  imagenPerfil: any;
  descripcion_perfil:any;

  constructor(private datos:PersonaService) {}
  persona:any;

  ngOnInit(): void {
    this.datos.getById('persona/${id}').subscribe(data=> {
      this.persona = data.id;
    })
  }*/

}
