import {ICourse} from './course';

export interface IUser {
  id?: number;
  username: string;
  password: string;
  courses: Array<ICourse>;
  token?: string;
}

export interface User {
  username: string;
  token: 'fake-jwt-token'
}
