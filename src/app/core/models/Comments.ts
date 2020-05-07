import {Author} from '../models/Author';
export class Comments{
    id:number;
    createdAt:Date;
    updatedAt:Date;
    body:string;
    author:Author;
}