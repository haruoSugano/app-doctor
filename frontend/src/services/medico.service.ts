import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, retry, throwError } from "rxjs";
import { Medico } from "src/app/shared/models/medico";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class MedicoService {

  apiUrl = environment.API_SISTEMA;

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      "Accept": "application/json",
      "Content-Type": ["application/json"],
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
      "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    }),

  };

  getMedicos(): Observable<Medico> {
    return this.http
      .get<Medico>(this.apiUrl + "/medicos")
      .pipe(retry(1), catchError(this.handleError))
  }

  getMedico(id: any): Observable<Medico> {
    return this.http
      .get<Medico>(this.apiUrl + "/medicos/" + id)
      .pipe(retry(1), catchError(this.handleError));
  }

  createMedico(medico: any): Observable<Medico> {
    let formData = new FormData();

    formData.append("name", medico.name);
    formData.append("email", medico.email);
    formData.append("data_nascimento", medico.data_nascimento);
    formData.append("crm", medico.crm);
    formData.append("telefone", medico.telefone);
    formData.append("endereco", medico.endereco);
    formData.append("numero", medico.numero);
    formData.append("cidade", medico.cidade);
    formData.append("estado", medico.estado);
    formData.append("cep", medico.cep);
    formData.append("assinatura", medico.assinatura, medico.assinatura.name);
    return this.http
      .post<Medico>(this.apiUrl + "/medicos", formData)
      .pipe(retry(1), catchError(this.handleErrorCreate));
  }

  updateMedico(id: any, medico: any): Observable<Medico> {
    let formData = new FormData();
    const file = medico.file ? medico.file : medico.assinatura

    formData.append("name", medico.name);
    formData.append("email", medico.email);
    formData.append("data_nascimento", medico.data_nascimento);
    formData.append("crm", medico.crm);
    formData.append("telefone", medico.telefone);
    formData.append("endereco", medico.endereco);
    formData.append("numero", medico.numero);
    formData.append("cidade", medico.cidade);
    formData.append("estado", medico.estado);
    formData.append("cep", medico.cep);
    formData.append("assinatura", file);
    return this.http
      .put<Medico>(this.apiUrl + "/medicos/" + id, formData)
      .pipe(retry(1), catchError(this.handleError));
  }

  deleteMedico(id: any): Observable<Medico> {
    return this.http
      .delete<Medico>(this.apiUrl + "/medicos/" + id, this.httpOptions)
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

  handleErrorCreate(error: any) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Erro ao realizar o cadastro`;
    }

    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
