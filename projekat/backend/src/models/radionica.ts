import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Radionica = new Schema(
    {
        glavnaSlika:{
            type:String
        },
        naziv:{
            type:String
        },
        datum:{
            type:Date
        },
        mesto:{
            type:String
        },
        opis:{
            type:String
        },
        prisustvovali:{
            type:Array
        },
        prijavljeni:{
            type:Array
        },
        galerija:{
            type:Array
        },
        dugacakOpis:{
            type:String
        },
        brojMesta:{
            type:Number
        },
        rezervisali:{
            type:Array
        },
        komentari:{
            type:Array
        },
        svidjanja:{
            type:Array
        },
        organizator:{
            type:String
        }
    }
)

export default mongoose.model('Radionica', Radionica, 'radionica');