import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginModel } from '../model/login.model';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {

  usuario!: LoginModel | null;
  token!: string | undefined;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.usuario != null ;
  }

  constructor(private loginService: LoginService) {
    this.loginService.login.subscribe(usuario => {
      this.usuario = usuario,
      this.token = this.usuario?.token;
    });
    
  }
  
}
