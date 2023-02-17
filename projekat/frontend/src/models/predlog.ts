import {Slika} from "./slika"

export class Predlog{
    _id:string
    naziv:string
    glavnaSlika:string
    datum:Date
    mesto:string
    opis:string
    predlozio:string
    dugacakOpis:string
    galerija:Array<Slika>
    moze:boolean  
}