import mongoose from "mongoose";

const Schema = mongoose.Schema;

let PredlogRadionice = new Schema(
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
        galerija:{
            type:Array
        },
        dugacakOpis:{
            type:String
        },
        predlozio:{
            type:String
        }
    }
)

export default mongoose.model('PredlogRadionice', PredlogRadionice, 'predlogRadionice');