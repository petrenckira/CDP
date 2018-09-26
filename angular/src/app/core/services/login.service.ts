import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {IUser, User} from '../models/user';
import {catchError} from 'rxjs/internal/operators';
import {throwError} from 'rxjs';
import {of} from 'rxjs';

@Injectable({providedIn: 'root'})
export class LoginService {
  private _authenticated = false;

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`/login`, {username, password})
      .pipe(map(user => {
          if (user && user.token) {
            this._authenticated = true;
            localStorage.setItem('currentUser', JSON.stringify(user));
          }
          const userInfo: User = {
            username: user.name,
            token: user.token
          };
          return userInfo;
        }),
        catchError(error => throwError(new Error(error))));
  }

  authenticated(): Observable<boolean> {
    return of(this._authenticated);
  }

  logout(): Observable<boolean> {
    this._authenticated = false;
    localStorage.removeItem('currentUser');
    return of(true);
  }
}
