import { Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Usuario } from "../../../backend/api/login/src/models/usuario.model.js";

const baseUrl = "http://localhost:3000/api/usuarios";

@Injectable({
  providedIn: "root"
})

export class LoginService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Usuario>{
    return this.http.get(baseUrl);
  }

  get(id: string): Observable<Usuario> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(user: any): Observable<any> {
    return this.http.post(baseUrl, user);
  }

  update(id: string, user: Usuario): Observable<Usuario> {
    return this.http.put(`${baseUrl}/${id}`, user);
  }

  delete(id: string): Observable<Usuario> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
