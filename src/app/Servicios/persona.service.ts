import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../Entidades/persona-entity';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
url = 'https://localhost:8080/persona/';

  constructor(private httpClient:HttpClient) { }

  public verPersona(id: number):Observable<Persona>{
    return this.httpClient.get<Persona>(this.url + `ver/${id}`);
  }

  public crear(persona: Persona):Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', persona);
  }

  public editar(persona: Persona):Observable<any>{
    return this.httpClient.put<any>(this.url + 'editar', persona);
  }

  public borrar(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`); 
  }


}
