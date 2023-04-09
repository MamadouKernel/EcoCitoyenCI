import { Role } from "./role";

export class Users{
    id?:number;
    nom?:string;
    prenom?:string;
    username?:string;
    email?:string;
    password?:string;
    role?:Role;

}