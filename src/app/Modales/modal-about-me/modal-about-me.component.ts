import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-about-me',
  templateUrl: './modal-about-me.component.html',
  styleUrls: ['./modal-about-me.component.css']
})
export class ModalAboutMeComponent implements OnInit {
form: FormGroup;

constructor(private formBuilder:FormBuilder){
  this.form = formBuilder.group({
    aboutMe:['', [Validators.required]],
  })

  }
  ngOnInit(): void{}

  //Métodos
  get Descripcion(){
    return this.form.get("aboutMe");
  }

  get DescripcionInvalid(){
    return this.Descripcion?.touched && !this.Descripcion?.valid;
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