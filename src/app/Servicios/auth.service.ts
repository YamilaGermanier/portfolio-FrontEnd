import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ModalLoginComponent } from '../Modales/modal-login/modal-login.component';
import { UsuarioService } from './usuario.service';
import { Usuario } from '../Entidades/usuario';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url='http://localhost:8080/'; //url de la api  http://localhost:8080/
   user:any;

  constructor(private userServ:UsuarioService) {
    this.getUser();
  }
  
  getUser():void{
    this.userServ.getById(1).subscribe((data)=>{
      this.user = data;
    });
  }

  authenticate(credenciales:Usuario): boolean{
    const authUser =
      credenciales.email == this.user.email &&
      credenciales.password == this.user.password;
    if (authUser) {
      localStorage.setItem('auth_token', 'true');
      return true;
    } else {
      return false;
    }
  }  

  logout(){
    localStorage.removeItem('auth_token');
  }

  //verificar sesión
  public logIn():boolean {
    return (localStorage.getItem('auth_token') !==null) ? true : false
  }
  
}
  //Metodo para enviar credenciales e iniciar sesion según msterclass
  /*login(credenciales:any):Observable<any>{
    return this.http.post(this.url + 'authenticate',credenciales).pipe(map(data=>{
      return data;
    }))
  };

  login(email: string, password: string) {
    const url = `${this.url}/login`;
    const body = { email, password };
    return this.http.post(url, body);
  }*/

  //cerrar sesión
    //Metodo para iniciar sesion y verificación
    /*iniciarSesion(credenciales:any):Observable<any>{
      return this.http.post(this.url + 'authenticate',credenciales).pipe(map(data=>{
        return data;
      }))
    }

    //Metodo para cerrar sesion
    logOut(){
      localStorage.removeItem('auth_token')
    }

  // buscar el token del navegador
  public logIn():boolean{
    return (localStorage.getItem('auth_token') !== null) ? true : false
  }
  //Metodo path para edicion parcial de los datos de la persona
  persona(dato:string,persona:Object):Observable<Object>{
    return this.http.patch(this.url + "persona/" + dato,JSON.stringify(persona));
  }
  //Metodo Post para agregar datos en la base de datos
  agregar(dato:string,valor:any):Observable<Object>{
      return this.http.post(this.url + dato + '/agregar',valor).pipe(map(data=>{
      window.location.reload()
      return data;
    }));
  }
  //Metodo delete para eliminar datos
  borrar(dato:string,id:number):Observable<Object>{
      return this.http.delete(this.url + dato +'/borrar/'+ id).pipe(map(data=>{
      window.location.reload()
      return data;
    }));
  }*/
