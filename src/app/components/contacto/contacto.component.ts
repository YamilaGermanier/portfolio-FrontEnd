import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  form:FormGroup;

  constructor(private formBuilder: FormBuilder) {
   this.form = this.formBuilder.group({
     nombre: ['', [Validators.required]],
     email: ['', [Validators.required, Validators.email]],
     mensaje: ['', [Validators.required]],
   })
  }

  ngOnInit(): void{}

  // form
  get Nombre(){
    return this.form.get('nombre');
  }

  get Email(){
    return this.form.get('email');
  }

  get Mensaje(){
    return this.form.get('mensaje');
  }

  // Validación
  get NombreInvalid(){
    return this.Nombre?.touched && !this.Nombre?.valid;
  }

  get EmailInvalid(){
    return this.Email?.touched && !this.Email?.valid;
  }

  get MensajeInvalid(){
    return this.Mensaje?.touched && !this.Mensaje?.valid;
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
