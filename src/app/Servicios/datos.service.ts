import { Injectable } from '@angular/core';
//suscribirse a los datos y que reciba respuestas asíncronas
import { Observable }  from 'rxjs';
//Hacer peticiones y CRUD
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
//http = alias
  constructor(private usuario:HttpClient) { }

  //método Observable que devuelve datos
  getDatos():Observable<any> {
    //retirnar datos utilizando el método get ed HttpClient	que llama a la BD json o a una URL
    return this.usuario.get('./assets/BD/datos.json');
  }
}
