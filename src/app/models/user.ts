import {UserBio} from './user-bio';

export interface User {
  id: number | string;
  name: string;
  totalPosts: number;
  recentPost?: number;
  image?: string,
  bio?: UserBio;
}
