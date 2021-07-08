import { SupplierTelephoneFax } from 'src/app/models/SupplierTelphoneFax';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Supplier } from '../models/Supplier';
import { Login } from '../models/Login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  isAuth: boolean = false;

  // apiLoginUri
  apiLoginUr = 'http://localhost:56748/api/Login';

  constructor(private _http: HttpClient) {}

  ngOnInit() {
    console.log('From Auth Service');
  }

  GetLogin(login: Login) {
    return this._http.post<Supplier>(this.apiLoginUr, login);
  }

  GetLogins() {
    return this._http.get<Login[]>(this.apiLoginUr);
  }

  GetAuth() {
    return this.isAuth;
  }

  SetAuth(isAuth: boolean) {
    this.isAuth = isAuth;
  }

  GetUserInfo(login:Login){
    return this._http.post<SupplierTelephoneFax>(this.apiLoginUr + "Info", login);
  }

  Susspended(login: Login) {
    return this._http.post<Login>("http://localhost:56748/api/susspended", login);
  }
}
