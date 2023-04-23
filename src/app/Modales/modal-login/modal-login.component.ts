import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {
 form:FormGroup;

 constructor(private formBuilder: FormBuilder) {
  this.form = this.formBuilder.group({
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.minLength(8)]],
  })
 }


 ngOnInit(): void{}

 //Métodos para el formulario
 
 get Mail() { //para que tome el mail del form
   return this.form.get("email");
 }
 
 get Password() { //para que tome la contraseña del form
   return this.form.get("password");
 }


 //MÉTODOS DE VALIDACIÓN
 get MailInvalid(){
  return this.Mail?.touched && !this.Mail?.valid;
 }

 get PasswordInvalid() {
  return this.Password?.touched && !this.Password?.valid;
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