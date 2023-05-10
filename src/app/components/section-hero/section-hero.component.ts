import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/Servicios/persona.service';
import { Persona } from 'src/app/Entidades/persona-entity';
import { AuthService } from 'src/app/Servicios/auth.service';

@Component({
  selector: 'app-section-hero',
  templateUrl: './section-hero.component.html',
  styleUrls: ['./section-hero.component.css']
})
export class SectionHeroComponent implements OnInit {
 personas: Persona[] = [];
 person:any={};

 constructor(private persoServ:PersonaService, protected auth:AuthService) { 
  nombre: PersonaService;
  apellido: PersonaService;
  mensaje: PersonaService;
  titulo: PersonaService;
  ubicacion: PersonaService;
  imagenPerfil: PersonaService;
 }

 ngOnInit(): void {
  this.verListaPersona();
 }

 public verListaPersona():void{
    this.persoServ.lista().subscribe(data => {this.personas=data});
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
