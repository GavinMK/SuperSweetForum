import {UserBio} from './user-bio';

export interface User {
  id: number | string;
  name?: string;
  totalPosts: number;
  image: string,
  bio: UserBio;
}
