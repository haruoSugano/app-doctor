import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, retry, throwError } from "rxjs";
import { Paciente } from "src/app/shared/models/paciente";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class PacienteService {

  apiUrl = environment.API_SISTEMA;

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  getPacientes(): Observable<Paciente> {
    return this.http
      .get<Paciente>(this.apiUrl + "/pacientes")
      .pipe(retry(1), catchError(this.handleError));
  }

  getPaciente(id: any): Observable<Paciente> {
    return this.http
      .get<Paciente>(this.apiUrl + "/pacientes/" + id)
      .pipe(retry(1), catchError(this.handleError));
  }

  createPaciente(paciente: any): Observable<Paciente> {
    return this.http
      .post<Paciente>(this.apiUrl + "/pacientes", paciente, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  updatePaciente(id: any, paciente: any): Observable<Paciente> {
    return this.http
      .put<Paciente>(this.apiUrl + "/pacientes/" + id, JSON.stringify(paciente), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  deletePaciente(id: any): Observable<Paciente> {
    return this.http
      .delete<Paciente>(this.apiUrl + "/pacientes/" + id, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
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
