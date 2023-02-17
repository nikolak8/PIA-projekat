import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Korisnik = new Schema({
    
    ime:{
        type:String
    },
    prezime:{
        type:String
    },
    korisnickoIme:{
        type:String
    },
    lozinka:{
        type:String
    },
    tip:{
        type:Number//0 admin,  1 organizator, 2 ucesnik
    },
    telefon:{
        type:String
    },
    email:{
        type:String
    },
    slika:{
        type:String
    },
    nazivOrganizacije:{
        type:String
    },
    drzavaOrganizacije:{
        type:String
    },
    gradOrganizacije:{
        type:String
    },
    postanskiBroj:{
        type:String
    },
    ulicaOrganizacije:{
        type:String
    },
    brojUlice:{
        type:Number
    },
    maticniBrojOrg:{
        type:String
    },
    status:{
        type:String
    }

})

export default mongoose.model('Korisnik', Korisnik, 'korisnik');
