import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencias } from '../Entidades/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciasService {

  url = 'http://localhost:8080/experiencias/';

  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Experiencias[]>{
    return this.httpClient.get<Experiencias[]>(this.url + 'lista');
  }

  public verExperiencia(id: number):Observable<Experiencias>{
    return this.httpClient.get<Experiencias>(this.url + `ver/${id}`);
  }

  public crear(expe: Experiencias):Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', expe);
  }

  public editar(expe: Experiencias):Observable<any>{
    return this.httpClient.put<any>(this.url + 'editar', expe);
  }

  public borrar(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`); 
  }
}
