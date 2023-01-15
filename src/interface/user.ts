export interface IUser{
    _id: string;
    name: string;
    email:string;
    password: string;
    isAllowed: boolean;
    role:string;

    createdAt?:string;
    updatedAt?:string;
}