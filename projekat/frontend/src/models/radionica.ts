import { Ucesnik } from "./ucesnik"
import {Slika} from "./slika"
import { Komentar } from "./komentar"

export class Radionica{
    _id:string
    naziv:string
    glavnaSlika:string
    datum:Date
    mesto:string
    opis:string
    prisustvovali:Array<Ucesnik>
    prijavljeni:Array<Ucesnik>
    dugacakOpis:string
    galerija:Array<Slika>
    brojMesta:number
    rezervisali:Array<Ucesnik>
    komentari:Array<Komentar>   
    svidjanja:Array<Ucesnik>
    organizator:string
}