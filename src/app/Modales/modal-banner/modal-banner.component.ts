import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-banner',
  templateUrl: './modal-banner.component.html',
  styleUrls: ['./modal-banner.component.css']
})
export class ModalBannerComponent implements OnInit {
form: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.form = formBuilder.group({
      banner:['', Validators.required],
    })
  }

ngOnInit() {}

// método form
get Banner(){
  return this.form.get("banner");
}

// método validador
get BannerInvalid(){
  return this.Banner?.touched && !this.Banner?.valid;
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
