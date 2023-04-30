import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-habilidades',
  templateUrl: './modal-habilidades.component.html',
  styleUrls: ['./modal-habilidades.component.css']
})
export class ModalHabilidadesComponent implements OnInit {
  form:FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.form = formBuilder.group({
      habilidad:['', [Validators.required]],
      porcentaje:['', [Validators.required]],
    })
  }

  get Habilidad(){
    return this.form.get('habilidad');
  }

  get Porcentaje(){
    return this.form.get('porcentaje');
  }

  //métodos de validación
  get PorcentajeInvalid(){
    return this.Porcentaje?.touched && !this.Porcentaje?.valid;
  }

  get HabilidadInvalid(){
    return this.Habilidad?.touched && !this.Habilidad?.valid;
  }


  ngOnInit(): void {}

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
