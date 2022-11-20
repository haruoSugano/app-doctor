import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, retry, throwError } from "rxjs"
import { environment } from "src/environments/environment";
import { Atestado } from "../app/shared/models/atestado";

@Injectable({
  providedIn: "root"
})
export class AtestadoService {

  apiUrl = environment.API_SISTEMA;

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  createAtestado(atestado: Atestado): Observable<Atestado> {
    return this.http
      .post<Atestado>(`${this.apiUrl}/atestados`, atestado)
      .pipe(retry(1), catchError(this.handleErrorCreate));
  }

  getAtestado(email: string): Observable<any> {
    return this.http
      .get<Atestado>(`${this.apiUrl}/atestados/pacientes/?email=${email}`)
      .pipe(retry(1), catchError(this.handleError));
  }

  handleErrorCreate(error: any) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = error.status === 500 ? "Erro interno ao gerar o atestado" : "É necessário preencher a descrição";
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
      errorMessage = "Ocorreu um erro ao buscar os atestados";
    }

    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
