import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Capacitaciones } from '../Entidades/capacitaciones';

@Injectable({
  providedIn: 'root'
})
export class CapacitacionesService {
  url = 'https://yamilager.onrender.com/capacitaciones/';

  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Capacitaciones[]>{
    return this.httpClient.get<Capacitaciones[]>(this.url + 'lista');
  }

  public verCapacitacion(id: number):Observable<Capacitaciones>{
    return this.httpClient.get<Capacitaciones>(this.url + `ver/${id}`);
  }

  public crear(capacitacion: Capacitaciones):Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', capacitacion);
  }

  public editar(capacitacion: Capacitaciones):Observable<any>{
    return this.httpClient.put<any>(this.url + 'editar', capacitacion);
  }

  public borrar(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`); 
  }
}
