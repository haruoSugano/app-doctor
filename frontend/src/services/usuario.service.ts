import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from 'src/app/shared/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  URL = environment.API_URL;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  login(email: string, senha: string): Observable<any> {
    return this.http.post(`${this.URL}/login`, { email, senha }, this.httpOptions);
  }

  createUsuario(usuario: any): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.URL}/usuarios`, usuario, this.httpOptions);
  }

  logout(): Observable<any> {
    return this.http.post(`${this.URL}/logout`, {}, this.httpOptions);
  }
}
