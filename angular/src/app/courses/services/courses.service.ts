import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import {IUser} from '../models/user';
import {ICourse} from '../../core/models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<ICourse[]>(`/courses`);
  }

  getCourse(id) {
    return this.http.get<ICourse>(`/courses/${id}`);
  }

  editCourse(id, body) {
    return this.http.post<ICourse>(`/courses/${id}`, body);
  }

  createCourse(body) {
    return this.http.post<ICourse>(`/courses/new`, body);
  }

  deleteCourse(id) {
    return this.http.post<ICourse[]>(`/courses`, id);
  }
}
