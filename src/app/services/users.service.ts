import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {UserResponseModel} from "../model/user-response.model";
import { LoginService } from './login.service';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }


  getUsers(page: number): Observable<UserResponseModel> {
    return this.http.get<UserResponseModel>('https://reqres.in/api/users', {
      params: new HttpParams()
        .set('page', page)
        .set('delay', 3),
    });
  }


}