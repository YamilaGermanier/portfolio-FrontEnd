import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Banner} from '../Entidades/banner-entity';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  url = 'http://localhost:8080/banner/';

  constructor(private httpClient:HttpClient) { }

  public verBanner(id: number):Observable<Banner>{
    return this.httpClient.get<Banner>(this.url + `ver/${id}`);
  }

  public cargar(ban : Banner):Observable<any>{
    return this.httpClient.post<any>(this.url + 'cargar', ban);
  }

  public editar(ban : Banner):Observable<any>{
    return this.httpClient.put<any>(this.url + 'editar', ban);
  }

  public borrar(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`); 
  }
}
