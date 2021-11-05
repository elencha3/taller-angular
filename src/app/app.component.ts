import { LoginModel } from './model/login.model';
import { LoginService } from './services/login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taller';

  usuario!: LoginModel | null;

  constructor(private loginService: LoginService) {
    loginService.login.subscribe( usuario => this.usuario = usuario)
  }

  hayUsuario(): boolean {
    return this.usuario != null;
  }

  logout():void {
    this.loginService.performLogout();
  }

}
