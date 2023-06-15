import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }
  login(email: string, password: string) {
    const userInfo = { email, password };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.post('http://localhost:8888/api/employee/login'
      , JSON.stringify(userInfo)
      , { headers: headers, responseType: 'text' }
    )
  }
  changePass(_id: string, passCurrent: string, passNew: string) {
    const pass = { _id, passCurrent, passNew };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.post('http://localhost:8888/api/employee/changepass'
      , JSON.stringify(pass)
      , { headers: headers, responseType: 'text' }
    )
  }
}
 // 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token') || '')