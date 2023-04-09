import { Dechet } from "./dechets";

export interface Collecte{

    date?: string;
    quantite?: number;
    statut?: string;
    dechet?: Dechet;
}