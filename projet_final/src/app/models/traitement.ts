import { Dechet } from "./dechets";

export interface Traitement{
    lieuTraitement?: string;
    statut?:string;
    quantite?:number;
    dechet?:Dechet;
}