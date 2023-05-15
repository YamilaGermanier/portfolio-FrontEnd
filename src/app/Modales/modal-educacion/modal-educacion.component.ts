import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-educacion',
  templateUrl: './modal-educacion.component.html',
  styleUrls: ['./modal-educacion.component.css']
})
export class ModalEducacionComponent implements OnInit {
  form:FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      imagen:['', Validators.required],
      titulo:['', Validators.required],
      fecha:['', Validators.required],
      institucion:['', Validators.required],
      nombre:['', Validators.required],
    })
   }

  ngOnInit(): void{}

  //Métodos de entrada
  get Imagen(){
    return this.form.get("imagen");
  }

  get Titulo(){
    return this.form.get("titulo");
  }

  get Fecha(){
    return this.form.get("fecha");
  }

  get Institucion(){
    return this.form.get("institucion");
  }

  get Nombre(){
    return this.form.get("nombre");
  }

  // Métodos de validación

  get ImagenInvalid(){
    return this.Imagen?.touched && !this.Imagen?.valid;
  }

  get TituloInvalid(){
    return this.Titulo?.touched && !this.Titulo?.valid;
  }

  get FechaInvalid(){
    return this.Fecha?.touched && !this.Fecha?.valid;
  }

  get InstitucionInvalid(){
    return this.Fecha?.touched && !this.Fecha?.valid;
  }

  get NombreInvalid(){
    return this.Nombre?.touched && !this.Nombre?.valid;
  }

  onEnviar(event: Event){

    event.preventDefault; 
    
    if (this.form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo salio bien ¡Enviar formuario!")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched(); 
    }
   }

}
