import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HabilidadesService } from 'src/app/Servicios/habilidades.service';
import { Observable } from 'rxjs';
import { Habilidades } from 'src/app/Entidades/habilidades';

@Component({
  selector: 'app-modal-habilidades',
  templateUrl: './modal-habilidades.component.html',
  styleUrls: ['./modal-habilidades.component.css']
})
export class ModalHabilidadesComponent implements OnInit {
  form:FormGroup;
  habilidad:any;
  nombre: string='';
  porcentaje: number = 0;
  color: string='';
  id:any;

  constructor(private formBuilder: FormBuilder, private habServ:HabilidadesService){
    this.form = formBuilder.group({
      nombre:['', [Validators.required]],
      porcentaje:['', [Validators.required]],
    })
  }

  get Nombre(){
    return this.form.get('nombre');
  }

  get Porcentaje(){
    return this.form.get('porcentaje');
  }

  //métodos de validación
  get PorcentajeInvalid(){
    return this.Porcentaje?.touched && !this.Porcentaje?.valid;
  }

  get NombreInvalid(){
    return this.Nombre?.touched && !this.Nombre?.valid;
  }

  ngOnInit(): void {}

    /*eliminar(id:number){
     if (id != undefined){
       alert("Experiencia eliminada");
      this.habServ.borrar(id).subscribe(data =>{
       }, err => {
         alert("ups, algo salió mal.");
       })
      }
    }*/

    
    onCrear():void{
    const habilidad = new Habilidades(this.nombre, this.porcentaje, this.color);
    this.habServ.crear(habilidad).subscribe(data =>{alert("Experiencia creada correctamente")
    window.location.reload();})
  }

  /*agregar(){
      if (this.form.valid){
      this.habServ.crear(this.habilidad).subscribe(data =>{this.habilidad = data})
      alert("Todo salio bien ¡Enviar formuario!")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched(); 
    }
  }*/

  onEnviar(event: Event){
    
    event.preventDefault; 
    
    if (this.form.valid){
      this.onCrear();
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      alert("ups, algo falló. Intente nuevamente");
      this.form.markAllAsTouched(); 
    }
  }
  
  cargarExperiencia():void {
    this.habServ.lista().subscribe(data => {this.habilidad = data})
  }
  
  borrar(id:number){
    if(confirm("Esta seguro de que desea borrar el proyecto?")){
      if (id !=undefined){
        this.habServ.borrar(id).subscribe(data =>{this.habilidad = data
        }, err => {
          alert("ups, algo salió mal.");
        })
      }
  
  };
  }
  
  
  
}
