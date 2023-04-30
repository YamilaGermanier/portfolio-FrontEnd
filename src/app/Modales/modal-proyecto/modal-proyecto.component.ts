import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-proyecto',
  templateUrl: './modal-proyecto.component.html',
  styleUrls: ['./modal-proyecto.component.css']
})
export class ModalProyectoComponent implements OnInit {
  form:FormGroup;

  constructor(private formBuilder: FormBuilder) {
   this.form = this.formBuilder.group({
     imagen: ['', [Validators.required]],
     titulo: ['', [Validators.required]],
     link: ['', [Validators.required]],
   })
  }

    ngOnInit(): void{}
 
  //Métodos para el formulario
  get Imagen(){
    return this.form.get('imagen');
  }

  get Titulo(){
    return this.form.get('titulo');
  }

  get Link(){
    return this.form.get('link');
  }
  
  //MÉTODOS DE VALIDACIÓN
  get ImagenInvalid(){
    return this.Imagen?.touched && !this.Imagen?.valid;
  }

  get TituloInvalid(){
    return this.Titulo?.touched && !this.Titulo?.valid;
  }

  get LinkInvalid(){
    return this.Link?.touched && !this.Link?.valid;
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
