import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidades } from '../Entidades/habilidades';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {
url = 'http://localhost:8080/habilidades/';

  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Habilidades[]>{
    return this.httpClient.get<Habilidades[]>(this.url + 'lista');
  }

  public getById(id: number):Observable<Habilidades>{
    return this.httpClient.get<Habilidades>(this.url + `ver/${id}`);
  }

  public crear(habilidad: Habilidades):Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', habilidad);
  }

  public editar(habilidad: Habilidades):Observable<any>{
    return this.httpClient.put<any>(this.url + 'editar', habilidad);
  }

  public borrar(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`); 
  }
}
