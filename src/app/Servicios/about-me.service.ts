import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SobreMi } from '../Entidades/sobreMi';

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {
  url = 'https://yamilager.onrender.com/sobreMi/';

  constructor(private httpClient:HttpClient) { }

  public verSobreMi(id:number):Observable<any>{
    return this.httpClient.get<any>(this.url + `ver/${id}`);
  }

  public crear(about: SobreMi):Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', about);
  }

  public editar(about: SobreMi):Observable<any>{
    return this.httpClient.put<any>(this.url + 'editar', about);
  }

  public borrar(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`); 
  }

}
