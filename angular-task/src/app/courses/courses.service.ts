import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import {IUser} from '../models/user';
import {ICourse} from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get<ICourse[]>(`/courses`);
  }
}
