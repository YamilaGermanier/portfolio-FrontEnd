import { Injectable } from '@angular/core';
import { Usuario } from '../Entidades/usuario';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  protected miUrl = 'https://yamilager.onrender.com/usuario/';
  private usuario: Usuario = new Usuario('', '');

  constructor(protected httpClient:HttpClient) {  }

  set email(email: string) {
    this.usuario.email = email;
  }

  set password(password: string) {
    this.usuario.password = password;
  }

  public lista(): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(this.miUrl + 'lista');
  }

  public verUsuario(id: number):Observable<Usuario>{
    return this.httpClient.get<Usuario>(this.miUrl + `ver/${id}`);
  }

  public crear(persona: Usuario):Observable<any>{
    return this.httpClient.post<any>(this.miUrl + 'crear', persona);
  }

  public editar(persona: Usuario):Observable<any>{
    return this.httpClient.put<any>(this.miUrl + 'editar', persona);
  }

  public borrar(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.miUrl + `borrar/${id}`); 
  }
  


  /*getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.miUrl + this.url + '/watch');
  }

  create(item: T): Observable<T> {
    return this.http.post<T>(this.miUrl + this.url + '/add', item);
  }

  update(id: number, item: T): Observable<T> {
    return this.http.put<T>(this.miUrl + this.url + '/edit/' + id, item);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.miUrl + this.url + '/delete/' + id);
  }*/


}
