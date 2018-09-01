import {Injectable} from '@angular/core';
import {HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {delay, mergeMap, materialize, dematerialize} from 'rxjs/operators';

import {IUser} from '../models/user';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let user: IUser = {
        id: 1,
        username: 'Admin',
        password: 'Admin123',
        courses: [
          {
            id: 1,
            name: 'Course ',
            duration: 123,
            date: new Date(),
            description: 'lorem',
            authors: ['I', 'Me', 'Myself']
          },
          {
            id: 2,
            name: 'Course ',
            duration: 123,
            date: new Date(),
            description: 'lorem',
            authors: ['I', 'Me', 'Myself']
          }
        ]
      }
    ;
    // let testUser = {id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User'};

    // wrap in delayed observable to simulate server api call
    return of(null).pipe(mergeMap(() => {

      // authenticate
      if (request.url.endsWith('/login') && request.method === 'POST') {
        if (request.body.username === user.username && request.body.password === user.password) {
          // if login details are valid return 200 OK with a fake jwt token
          let body = {
            id: user.id,
            username: user.username,
            password: user.password,
            courses: user.courses,
            token: 'fake-jwt-token'
          };
          return of(new HttpResponse({status: 200, body}));
        } else {
          // else return 400 bad request
          return throwError({error: {message: 'Username or password is incorrect'}});
        }
      }

      // get users
      if (request.url.endsWith('/courses') && request.method === 'GET') {
        // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
        if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
          return of(new HttpResponse({status: 200, body: user.courses}));
        } else {
          // return 401 not authorised if token is null or invalid
          return throwError({error: {message: 'Unauthorised'}});
        }
      }

      // if (request.url.endsWith('/courses') && request.method === 'POST' ) {
      //   // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
      //   if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
      //     return of(new HttpResponse({status: 200, body: user.courses}));
      //   } else {
      //     // return 401 not authorised if token is null or invalid
      //     return throwError({error: {message: 'Unauthorised'}});
      //   }
      // }

      // pass through any requests not handled above
      return next.handle(request);

    }))

    // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize());
  }
}

export let fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};

