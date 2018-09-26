import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {delay, mergeMap, materialize, dematerialize} from 'rxjs/operators';

import {IUser, User} from '../models/user';

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
            authors: 'Myself'
          },
          {
            id: 2,
            name: 'Course ',
            duration: 123,
            date: new Date(),
            description: 'lorem',
            authors: 'Myself'
          },
          {
            id: 3,
            name: 'Course ',
            duration: 123,
            date: new Date(),
            description: 'lorem',
            authors: 'Myself'
          }

        ]
      }
    ;

    return of(null).pipe(mergeMap(() => {

      if (request.url.endsWith('/login') && request.method === 'POST') {
        if (request.body.username === user.username && request.body.password === user.password) {
          let body: IUser = {
            id: user.id,
            username: user.username,
            password: user.password,
            courses: user.courses,
            token: 'fake-jwt-token'
          };

          // let body: User = {
          //   username: user.username,
          //   token: 'fake-jwt-token'
          // };
          return of(new HttpResponse({status: 200, body}));
        } else {
          return throwError({error: {message: 'Username or password is incorrect'}});
        }
      }

      // get courses
      if (request.url.endsWith('/courses') && request.method === 'GET') {
        if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
          let currentUser = JSON.parse(localStorage.getItem('currentUser'));
          console.log(currentUser.courses);
          return of(new HttpResponse({status: 200, body: currentUser.courses}));
        } else {
          console.log('its so bad');
          return throwError({error: {message: 'Unauthorised'}});
        }
      }

      // get course
      if (request.url.match(/\/courses\/\d+$/) && request.method === 'GET') {
        if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
          let currentUser = JSON.parse(localStorage.getItem('currentUser'));
          let urlParts = request.url.split('/');
          let id = parseInt(urlParts[urlParts.length - 1]);
          let matchedCourse = currentUser.courses.filter(course => {
            return course.id === id;
          });
          let course = matchedCourse.length ? matchedCourse[0] : null;

          return of(new HttpResponse({status: 200, body: course}));
        } else {
          return throwError({error: {message: 'Unauthorised'}});
        }
      }

      // edit course
      if (request.url.match(/\/courses\/\d+$/) && request.method === 'POST') {
        if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
          let currentUser = JSON.parse(localStorage.getItem('currentUser'));
          let urlParts = request.url.split('/');
          let id = parseInt(urlParts[urlParts.length - 1]);
          let foundIndex = currentUser.courses.findIndex(course => course.id === id);
          currentUser.courses[foundIndex] = request.body;
          localStorage.setItem('currentUser', JSON.stringify(currentUser));
          return of(new HttpResponse({status: 200, body: currentUser.courses}));
        } else {
          return throwError({error: {message: 'Unauthorised'}});
        }
      }


      //add course
      if (request.url.endsWith('/courses/new') && request.method === 'POST') {
        if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
          let currentUser = JSON.parse(localStorage.getItem('currentUser'));
          let newCourse = request.body;
          newCourse.id = currentUser.courses.length + 1;
          currentUser.courses.push(newCourse);
          localStorage.setItem('currentUser', JSON.stringify(currentUser));
          return of(new HttpResponse({status: 200, body: currentUser.courses}));
        } else {
          return throwError({error: {message: 'Unauthorised'}});
        }
      }

      //delete course
      if (request.url.endsWith('/courses') && request.method === 'POST') {
        if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
          let currentUser = JSON.parse(localStorage.getItem('currentUser'));
          let courseId = request.body;
          let foundIndex = currentUser.courses.findIndex(course => course.id === courseId);
          currentUser.courses.splice(foundIndex, 1);
          localStorage.setItem('currentUser', JSON.stringify(currentUser));
          return of(new HttpResponse({status: 200, body: currentUser.courses}));
        } else {
          return throwError({error: {message: 'Unauthorised'}});
        }
      }

      return next.handle(request);

    }))

      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize());
  }
}

export let fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};

