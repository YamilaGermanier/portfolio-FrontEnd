import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-experiencia',
  templateUrl: './modal-experiencia.component.html',
  styleUrls: ['./modal-experiencia.component.css']
})
export class ModalExperienciaComponent implements OnInit{
  form:FormGroup;

  constructor(private formBuilder: FormBuilder) {
   this.form = this.formBuilder.group({
     inicio:['', [Validators.required]],
     fin:['', [Validators.required]],
     puesto:['', [Validators.required,]],
     descripcion:['', [Validators.required, Validators.minLength(50)]]
   })
  }

  ngOnInit(): void{}

  // Métodos de form
  get Inicio() {
    return this.form.get("inicio");
  }

  get Fin(){
    return this.form.get("fin");
  }
  
  get Puesto() {
    return this.form.get("puesto");
  }

  get Descripcion() {
    return this.form.get("descripcion");
  }

  // Métodos de validación
  get InicioInvalid() {
    return this.Inicio?.touched && !this.Inicio?.valid;
  }

  get FinInvalid() {
    return this.Fin?.touched && !this.Fin?.valid;
  }

  get PuestoInvalid() {
    return this.Puesto?.touched && !this.Puesto?.valid;
  }

  get DescripcionInvalid() {
    return this.Descripcion?.touched && !this.Descripcion?.valid;
  }

  limpiar(): void {
    this.form.reset();
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
