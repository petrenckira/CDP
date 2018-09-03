import {ICourse} from './course';

export interface IUser {
  id?: number;
  username: string;
  password: string;
  courses: Array<ICourse>;
}
