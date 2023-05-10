import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Servicios/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {
 form:FormGroup;
 email='';
 password='';

 constructor(private formBuilder: FormBuilder, private auth:AuthService,private route:Router) {
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

 /*onEnviar(event: Event){
  this.auth.authenticate(this.email, this.password).subscribe(
    (response: any) => { },
    (error) => {
      this.error = 'Nombre de usuario o contraseña incorrectos.';
    }
  );
}*/

onEnviar(event: Event) {
  event.preventDefault();
  const isAuthenticated = this.auth.authenticate(this.form.value);
  if (isAuthenticated) {
    this.route.navigate(['/inicio']);
  } else {
    this.form.markAllAsTouched;
  }
}

}


/* onEnviar(event: Event){

  event.preventDefault; 
  
  if (this.form.valid){

    alert("Todo salio bien ¡Enviar formuario!")
    this.auth.login(this.form.value).subscribe(data=>{
      this.route.navigate(['']);
      
    })

  }else{

    if(this.form.valid){
      //llamar servicio a base de datos
      console.log("Datos tomados");
      this.auth.login(this.form.value).subscribe(data=>{
        console.log("data: "+ JSON.stringify(data));
        this.route.navigate(['/inicio']);
        localStorage.setItem('auth_token',data.token)
      })
    }else{
      alert("ups algun dato salio mal");
      this.form.markAllAsTouched;
    }
  }
}*/