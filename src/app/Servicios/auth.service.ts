import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { UsuarioService } from './usuario.service';
import { Usuario } from '../Entidades/usuario';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
   user:any;

  constructor(private userServ:UsuarioService, private route:Router) {
    this.getUser();
  }
  
  getUser():void{
    this.userServ.verUsuario(1).subscribe((data)=>{
      this.user = data;
    });
  }

  verificacion(usuario:Usuario): boolean{
    const userAdmin =
      usuario.email == this.user.email &&
      usuario.password == this.user.password;
    if (userAdmin) {
      window.location.reload();
      localStorage.setItem('adminLog', 'true');
      this.route.navigate(['/inicio']);
      return true;
    } else {
      return false;
    }
  }

  logout():void{
    localStorage.removeItem('adminLog');
  }
}
  //verificar sesión
  /*public logIn():boolean {
    return (localStorage.getItem('adminLog') !==null) ? true : false
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
