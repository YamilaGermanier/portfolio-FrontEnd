import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-section-hero',
  templateUrl: './modal-section-hero.component.html',
  styleUrls: ['./modal-section-hero.component.css']
})
export class ModalSectionHeroComponent implements OnInit{
  form:FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      foto:['', [Validators.required]],
      nombre:['', [Validators.required]],
      titulo:['', [Validators.required]],
      ubicacion:['', [Validators.required]],
    })
   }
   
   ngOnInit(): void{}

  //Métodos de entrada
  get Foto(){
    return this.form.get("foto");
  }

  get Nombre(){
    return this.form.get("nombre");
  }

  get Titulo(){
    return this.form.get("titulo");
  }

  get Ubicacion(){
    return this.form.get("ubicacion"); 
  }
  
  // Métodos para validar

  get FotoInvalid(){
    return this.Foto?.touched && !this.Foto.valid; 
  }

  get NombreInvalid(){
    return this.Nombre?.touched && !this.Nombre.valid; 
  }

  get TituloInvalid(){
    return this.Titulo?.touched && !this.Titulo.valid; 
  }

  get UbicacionInvalid(){
    return this.Ubicacion?.touched && !this.Ubicacion.valid; 
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
