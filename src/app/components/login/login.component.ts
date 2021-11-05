import { LoginModel } from './../../model/login.model';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  enviado: boolean = false;
  errorMsg!: string | null;
  isLoading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) { 
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  submitForm() {
    //Pasarlo a true para gestionar is invalid
    this.enviado = true;
    if(!this.loginForm.valid){
      return;
    }
    this.isLoading = true;
    this.loginService.performLogin(new LoginModel(this.loginForm.controls.username.value,
      this.loginForm.controls.password.value, ''))
    .subscribe(
      respuesta => {
      console.log(JSON.stringify(respuesta));
      this.isLoading = false;
      this.errorMsg = null;
    },
      error =>{
      this.errorMsg = `⚠️¡No se ha podido iniciar sesión!' ((${error.error?.error}))`;
      console.log('ERROR: ' + JSON.stringify(error));
      this.isLoading = false;
    }, () =>{
      this.isLoading = false;
    });
      

  } 

}
