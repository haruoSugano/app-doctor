import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, map, Observable, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { Usuario } from "../app/shared/models/usuario";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  endpoint: string = environment.API_LOGIN
  headers = new HttpHeaders().set("Content-Type", "application/json");
  currentUser = {};

  constructor(private http: HttpClient, public router: Router) { }

  signIn(user: Usuario) {
    return this.http.post<any>(`${this.endpoint}/login`, user).subscribe((res: any) => {
      localStorage.setItem("access_token", res.token);
      this.getUserProfile(res.usuario._id).subscribe((res) => {
        this.currentUser = res;
        Object.keys(this.currentUser).forEach((item) => {
          if (this.currentUser["isAdmin"] === true && this.currentUser["isMedico"] === true) {
            this.router.navigate(["home"]);
          }

          if (this.currentUser["isAdmin"] === false && this.currentUser["isMedico"] === false) {
            this.router.navigate(["home/pacientes"]);
          }

          if (this.currentUser["isMedico"] === true && this.currentUser["isAdmin"] === false) {
            this.router.navigate(["home/medico"]);
          }
          localStorage.setItem("email", this.currentUser["email"]);
        });
      });
    });
  }

  getToken() {
    return localStorage.getItem("access_token");
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem("access_token");
    return authToken !== null ? true : false;
  }

  doLogout() {
    let removeToken = localStorage.removeItem("access_token");
    if (removeToken == null) {
      this.router.navigate(["/"]);
    }
  }

  getUserProfile(id: any): Observable<any> {
    let api = `${this.endpoint}/usuarios/${id}`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse) {
    let msg = "";
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`
    }

    return throwError(msg);
  }

}
