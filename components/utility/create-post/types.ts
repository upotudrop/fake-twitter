export type Tevent = React.ChangeEvent<HTMLInputElement>;

export interface IInputs {
    author: string
    creationDate: string
    post: string
}

export type TSupportedInputs = 'author' | 'creationDate' | 'post';

export interface IPost {
    author: string;
    creationDate: string; 
    post: string;
}

export enum Inputs {
    author = 'author',
    creationDate = 'creationDate',
    post = 'post'
}