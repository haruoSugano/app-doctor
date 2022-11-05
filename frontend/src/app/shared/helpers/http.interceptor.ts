import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "src/services/auth.service";

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.authService.getToken();
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`,
      }
    });
    return next.handle(req);
  }
}
