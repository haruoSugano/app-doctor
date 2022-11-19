import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from 'src/app/shared/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  URL = environment.API_LOGIN;

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

  getUsuariosPacientes(): Observable<Usuario> {
    return this.http
    .get<Usuario>(`${this.URL}/usuarios/pacientes`)
    .pipe(retry(1), catchError(this.handleError))
  }

  getUsuariosMedicos(): Observable<Usuario> {
    return this.http
    .get<Usuario>(`${this.URL}/usuarios/medicos`)
    .pipe(retry(1), catchError(this.handleError))
  }

  updateUsuario(id: string, usuario: Usuario): Observable<Usuario> {
    return this.http
      .put<Usuario>(this.URL + "/usuarios/" + id, JSON.stringify(usuario), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  sendMail(mail): Observable<any> {
    return this.http
      .post<Usuario>(this.URL + "/forgot", mail)
      .pipe(retry(1), catchError(this.handleError));
  }

  passwordUpdate(id: string, password: any): Observable<any> {
    return this.http
    .post<Usuario>(`${this.URL}/forgot/user/${id}`, password)
    .pipe(retry(1), catchError(this.handleError));
  }

  deleteUsuario(id: string): Observable<Usuario>{
    return this.http
    .delete<Usuario>(this.URL + `/usuarios/${id}`, this.httpOptions)
    .pipe(retry(1), catchError(this.handleError));
  }

  logout(): Observable<any> {
    return this.http.post(`${this.URL}/logout`, {}, this.httpOptions);
  }

  handleError(error: any) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\Message: ${error.message}`;
    }

    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
