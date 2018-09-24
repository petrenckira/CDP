import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs/Rx';
import {IUser} from '../models/user';

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
        return user;
      }));
  }

  authenticated(): Observable<boolean> {
    return Observable.of(this._authenticated);
  }

  logout(): Observable<boolean> {
    this._authenticated = false;
    localStorage.removeItem('currentUser');
    return Observable.of(true);
  }
}
