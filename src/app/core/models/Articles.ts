import {Author} from './Author'
export class Articles{ 
  slug: string;
  title : string;
  description:string;
  body :string;
  tagList: Array<string>;
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author:Author

}