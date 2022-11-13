import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, retry, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { Agenda } from "src/app/shared/models/agenda";

@Injectable({
  providedIn: "root"
})
export class AgendaService {
  apiUrl = environment.API_SISTEMA;

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  createAgenda(agenda: Agenda): Observable<any> {
    return this.http.post<Agenda>(`${this.apiUrl}/agendas`, agenda).pipe(retry(1), catchError(this.handleError));
  }

  getAgendas(): Observable<Agenda> {
    return this.http
      .get<Agenda>(this.apiUrl + "/agendas")
      .pipe(retry(1), catchError(this.handleError));
  }

  getAgendasStatus(): Observable<Agenda> {
    return this.http
      .get<Agenda>(this.apiUrl + "/agendas/status")
      .pipe(retry(1), catchError(this.handleError));
  }

  getAgenda(id: number): Observable<any> {
    return this.http
      .get<Agenda>(`${this.apiUrl}/agenda/${id}`)
      .pipe(retry(1), catchError(this.handleError));
  }

  getAgendaByPaciente(id: number): Observable<any> {
    return this.http
      .get<Agenda>(`${this.apiUrl}/agendas/paciente/${id}`)
      .pipe(retry(1), catchError(this.handleError));
  }

  updateAgendaStatus(id: number, status: string): Observable<any> {
    return this.http
      .put<Agenda>(this.apiUrl + "/agendas/" + id, status)
      .pipe(retry(1), catchError(this.handleError));
  }

  updateAgenda(id: number, agenda: Agenda): Observable<any> {
    return this.http
      .put<Agenda>(`${this.apiUrl}/agendas/agenda/${id}`, agenda)
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
