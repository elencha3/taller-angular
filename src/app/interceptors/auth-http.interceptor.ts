import { LoginModel } from './../model/login.model';
import { LoginService } from './../services/login.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {

  usuario!: LoginModel | null;
  token!: string | undefined;

  constructor(private loginService: LoginService) {
    this.loginService.login.subscribe(usuario => {
      this.usuario = usuario,
      this.token = this.usuario?.token;
    });
    
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if(this.token !== undefined) {
      request = request.clone( {
        setHeaders:{
          Authorization: `Basic ${this.token}` //añado token
        }
      });
    }
    
    return next.handle(request);
  }
}
