import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, retry, throwError } from "rxjs"
import { environment } from "src/environments/environment";
import { Receituario } from "src/app/shared/models/receituario";

@Injectable({
  providedIn: "root"
})
export class ReceituarioService {

  apiUrl = environment.API_SISTEMA;

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  createReceituario(receituario: Receituario): Observable<Receituario> {
    return this.http
      .post<Receituario>(`${this.apiUrl}/receituarios`, receituario)
      .pipe(retry(1), catchError(this.handleErrorCreate));
  }

  getReceituarios(email: string): Observable<any> {
    return this.http
      .get<Receituario>(`${this.apiUrl}/receituarios/paciente/?email=${email}`)
      .pipe(retry(1), catchError(this.handleError));
  }

  getAllReceituarios(): Observable<any> {
    return this.http
      .get<Receituario>(`${this.apiUrl}/receituarios`)
      .pipe(retry(1), catchError(this.handleError));
  }

  handleErrorCreate(error: any) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = error.status === 500 ? "Erro interno ao gerar o receituario" : "É necessário preencher a descrição";
    }

    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

  handleError(error: any) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = "Ocorreu um erro ao buscar os receituarios";
    }

    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
