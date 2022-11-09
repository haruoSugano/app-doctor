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
