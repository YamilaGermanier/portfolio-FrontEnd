import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../Entidades/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  url = 'http://localhost:8080/proyectos/';

  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Proyectos[]>{
    return this.httpClient.get<Proyectos[]>(this.url + 'lista');
  }

  public verProyecto(id: number):Observable<Proyectos>{
    return this.httpClient.get<Proyectos>(this.url + `ver/${id}`);
  }

  public crear(proyect: Proyectos):Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', proyect);
  }

  public editar(proyect: Proyectos):Observable<any>{
    return this.httpClient.put<any>(this.url + 'editar',proyect);
  }

  public borrar(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`); 
  }
}
