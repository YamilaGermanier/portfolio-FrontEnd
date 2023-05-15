import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Titulos } from '../Entidades/titulos';

@Injectable({
  providedIn: 'root'
})
export class TitulosService {
  url = 'https://yamilager.onrender.com/titulos/';

  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Titulos[]>{
    return this.httpClient.get<Titulos[]>(this.url + 'lista');
  }

  public verTitulos(id: number):Observable<Titulos>{
    return this.httpClient.get<Titulos>(this.url + `ver/${id}`);
  }

  public crear(titul: Titulos):Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', titul);
  }

  public editar(titul: Titulos):Observable<any>{
    return this.httpClient.put<any>(this.url + 'editar', titul);
  }

  public borrar(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`); 
  }
}
