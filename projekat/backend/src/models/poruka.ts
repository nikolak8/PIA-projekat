import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Poruka = new Schema({

    korisnickoime1:{
        type:String
    },
    korisnickoime2:{
        type:String
    },
    idRad:{
        type:String
    },
    razgovor:{
        type:Array
    }
})

export default mongoose.model('Poruka', Poruka, 'poruke');