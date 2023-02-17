import express from 'express';
import radionica from '../models/radionica';
import Radionica from '../models/radionica';
import multer from 'multer';
const fs = require('fs')



const Storage = multer.diskStorage({
    destination:'../frontend/src/assets',
    filename:(req, file, cb)=>{
        cb(null,  Date.now() + file.originalname)
    }
});

const upload = multer({
    storage:Storage
}).single('slika');

const uploadVise = multer({
    storage:Storage
}).array('galerija[]');


export class RadionicaController{

    dohvatiSveRadionice = (req:express.Request, res:express.Response) => {

        Radionica.find({},
        (err, radionica) =>{
            if(err) console.log(err);
            else res.json(radionica)
        })
    }

    dohvatiRadionicuId = (req:express.Request, res:express.Response)=>{
        let id = req.body.id;
        Radionica.findOne({"_id":id}, (err, rad)=>{
            if(err) console.log(err);
            else{
                res.json(rad);
            }
        })
    }

    preuzmi = (req:express.Request, res:express.Response)=>{
        res.download("../backend/sablon.json", 'sablon.json');
    }

    

    sacuvajSablon = (req:express.Request, res:express.Response)=>{
        let id = req.body.idRad;
        Radionica.findOne({"_id":id}, (err, r)=>{
            if(err) console.log(err);
            else{
                let sablon = ({
                    "naziv":r.naziv,
                    "datum":r.datum,
                    "organizator":r.organizator,
                    "mesto":r.mesto,
                    "glavnaSlika":r.glavnaSlika,
                    "opis":r.opis,
                    "dugacakOpis":r.dugacakOpis,
                    "galerija":r.galerija
                })
                let fname = id.toString() + ".json";
                let s = JSON.stringify(sablon);
                fs.writeFile("sablon.json", s, 'utf8', function(err){
                    if(err) console.log(err);
                }) 
                res.json({"message":"ok"});
            }
        })
    }

    ukloniIzGalerije = (req:express.Request, res:express.Response)=>{
        let idRad = req.body.idRad;
        let slika = req.body.slika;
        Radionica.updateOne({"_id":idRad}, {"$pull":{"galerija":{"slika":slika}}}, (err, succ)=>{
            if(err) console.log(err);
            else res.json({"message":"ok"});
        })
    }

    prijaviMe = (req:express.Request, res:express.Response)=>{
        let id = req.body.id;
        let korisnickoIme = req.body.korisnickoIme;
        Radionica.updateOne({"_id":id}, {"$push":{"rezervisali":{"ime":korisnickoIme}}}, (err, succ)=>{
            if(err) console.log(err);
            else res.json({"message":"ok"});
        })
    }

    lajkuj = (req:express.Request, res:express.Response)=>{
        let idRad = req.body.idRad;
        let korisnickoIme = req.body.korisnickoIme;
        Radionica.updateOne({"_id":idRad}, {"$push":{"svidjanja":{"ime":korisnickoIme}}}, (err, succ)=>{
            if(err) console.log(err);
            else res.json({"message":"ok"});
        })
    }

    obrisiRadionicu = (req:express.Request, res:express.Response)=>{
        let id = req.body.id;
        Radionica.findOneAndRemove({"_id":id}, (err, succ)=>{
            if(err) console.log(err);
            else res.json({"message":"izbrisan"});
        })
    }

    otkaziRadionicu = (req:express.Request, res:express.Response)=>{
        let id = req.body.idRad;
        Radionica.findOneAndRemove({"_id":id}, (err, rad)=>{
            if(err) console.log(err);
            else res.json(rad);
        })
    }

    prihvatiPrijavu = (req:express.Request, res:express.Response)=>{
        let idRad = req.body.idRad;
        let ime = req.body.ime;
        Radionica.updateOne({"_id":idRad}, {"$pull":{"rezervisali":{"ime":ime}}}, (err, succ)=>{
            if(err) console.log(err);
            else{
                Radionica.updateOne({"_id":idRad}, {"$push":{"prijavljeni":{"ime":ime}}}, (err, s)=>{
                    if(err) console.log(err);
                    else{
                        Radionica.updateOne({"_id":idRad}, {"$inc":{brojMesta:-1}}, (err, suc)=>{
                            if(err) console.log(err);
                            else{
                                res.json({"message":"ok"});
                            }
                        })
                    }
                })
            }
        })
    }

    odbijPrijavu = (req:express.Request, res:express.Response)=>{
        let idRad = req.body.idRad;
        let ime = req.body.ime;
        Radionica.updateOne({"_id":idRad}, {"$pull":{"rezervisali":{"ime":ime}}}, (err, succ)=>{
            if(err) console.log(err);
            else {
                res.json({"message":"ok"});
            }
        })
    }

    otkaziPrijavu = (req:express.Request, res:express.Response)=>{
        let id = req.body.id;
        let korisnickoIme = req.body.korisnickoIme;
        Radionica.updateOne({"_id":id}, {"$pull":{"prijavljeni":{"ime":korisnickoIme}}}, (err, succ)=>{
            if(err) console.log(err);
            else{
                Radionica.updateOne({"_id":id}, {"$inc":{brojMesta:1}}, (err, succ)=>{
                    if(err) console.log(err);
                    else res.json({"message":"ok"});
                })
            }
        })
    }

    dohvatiRadionice = (req:express.Request, res:express.Response)=>{
        if(req.body.naziv == "" && req.body.mesto != ""){
            Radionica.find({'mesto':{"$regex":req.body.mesto}}, (err, radionica)=>{
                if(err) console.log(err);
                else res.json(radionica);
            })
        } else if(req.body.naziv != "" && req.body.mesto == ""){
            Radionica.find({'naziv':{"$regex":req.body.naziv}}, (err, radionica)=>{
                if(err) console.log(err);
                else res.json(radionica);
            })
        } else if(req.body.naziv != "" && req.body.mesto != ""){
            Radionica.find({$and:[{'naziv':{"$regex":req.body.naziv}}, {'mesto':{"$regex":req.body.mesto}}]}, (err, radionica)=>{
                if(err) console.log(err);
                else res.json(radionica);
            })
        } else {
            Radionica.find({}, (err, radionica)=>{
                if(err) console.log(err);
                else res.json(radionica);
            })
        }
    }

    azurirajRadionicu = (req:express.Request, res:express.Response)=>{
        upload(req, res, (err)=>{
            if(err) console.log(err);
            else{
                let slika = '';
                if(!req.file){
                    slika = req.body.staraSlika;
                }else{
                    slika = req.file.filename;
                }
                Radionica.findOneAndUpdate({"_id":req.body.id}, {"$set":{"naziv":req.body.naziv, "opis":req.body.opis, "dugacakOpis":req.body.dugacakOpis, "mesto":req.body.mesto, "datum":req.body.datum, "glavnaSlika":slika}}, (err, rad)=>{
                    if(err)console.log(err);
                    else res.json({"message":"Uspesno azurirana radionica"});
                })
            }
        })
    }

    azurirajKomentar = (req:express.Request, res:express.Response)=>{
        let autor = req.body.autor;
        let komentar = req.body.komentar;
        let timestampStari = req.body.timestamp;
        let timestamp = Date.now();
        let datum = new Date();
        let idRad = req.body.idRad;
        Radionica.updateOne({"_id":idRad}, {"$pull":{"komentari":{"autor":autor, "timestamp":timestampStari}}},(err, succ)=>{
            if(err) console.log(err)
            else{
                Radionica.updateOne({"_id":idRad},{"$push":{"komentari":{"autor":autor, "timestamp":timestamp, "komentar":komentar, "datum":datum}}}, (err, succ)=>{
                    if(err) console.log(err)
                    else{
                        res.json({"message":"ok"});
                    }
                })
            }
        })
    }

    dodajKomentar = (req:express.Request, res:express.Response)=>{
        let korisnickoIme = req.body.korisnickoIme;
        let novKomentar = req.body.novKomentar;
        let idRad = req.body.idRad;
        console.log(idRad);
        let timestamp = Date.now();
        let datum = new Date();
        Radionica.updateOne({"_id":idRad}, {"$push":{"komentari":{"autor":korisnickoIme, "timestamp":timestamp, "komentar":novKomentar, "datum":datum}}}, (err, succ)=>{
            if(err) console.log(err);
            else{
                res.json({"message":"ok"});
            }
        })
    }

    proveriLajk = (req:express.Request, res:express.Response)=>{
        let naziv = req.body.nazivRad;
        let datum = new Date(req.body.datumRad)
        console.log(datum);
        Radionica.find({"$and":[{"datum":{"$lt":datum}}, {"naziv":naziv}]}, (err, rad)=>{
            if(err) console.log(err);
            else{
                res.json(rad);
            }
        })
    }

    obrisiKomentar = (req:express.Request, res:express.Response)=>{
        let timestamp = req.body.timestamp;
        let autor = req.body.autor;
        let idRad = req.body.idRad;
        Radionica.updateOne({"_id":idRad}, {"$pull":{"komentari":{"autor":autor, "timestamp":timestamp}}}, (err, succ)=>{
            if(err) console.log(err);
            else{
                res.json({"message":"ok"});
            }
        })
    }

    povuciSvidjanje = (req:express.Request, res:express.Response)=>{
        let ime = req.body.ime;
        let idRad = req.body.idRad;
        Radionica.updateOne({"_id":idRad}, {"$pull":{"svidjanja":{"ime":ime}}}, (err, succ)=>{
            if(err) console.log(err);
            else{
                res.json({"message":"ok"});
            }
        })
    }

    dodajRadionicu = (req:express.Request, res:express.Response)=>{
        uploadVise(req, res, (err)=>{
            if(err) console.log(err);
            else{
                let g = [];
                let gal = []
                for(let i = 0; i < req.files.length; i++){
                    const slika = {
                        slika:req.files[i].filename
                        }
                    g.push(slika);
                 }
                 let glSlika = g[0].slika;
                 for(let i = 1; i < g.length; i++){
                    gal.push(g[i]);
                 }
                 let d = new Date(req.body.datum)
                 let dd = d.toISOString();
    
                let novaRadionica = new Radionica({
                    naziv:req.body.naziv,
                    glavnaSlika:glSlika,
                    opis:req.body.opis,
                    dugacakOpis:req.body.dugacakOpis,
                    mesto:req.body.mesto,
                    datum:dd,
                    galerija:gal,
                    brojMesta:20,
                    rezervisali:[],
                    prisustvovali:[],
                    prijavljeni:[]
                })
                novaRadionica.save().then(()=> res.json({'message': 'ok'})).catch((err)=>console.log(err));
            }
        })
    }

    azurirajRadionicuOrganizator = (req:express.Request, res:express.Response)=>{
        uploadVise(req, res, (err)=>{
            if(err) console.log(err);
            else{
                let g = [];
                let gal = [];
                let glSlika;
                let galerija;
                let idRad = req.body.idRad;
                let cnt;

                for(let i = 0; i < req.files.length; i++){
                    const slika = {
                        slika:req.files[i].filename
                        }
                    g.push(slika);
                 }

                 
                if(req.body.nijeMenjana == "jeste"){
                    glSlika = req.body.staraSlika;
                    cnt = 0;
                }else{
                    glSlika = g[0].slika;
                    cnt = 1;
                } 
                if(req.body.nijeMenjanaGal == "jeste"){
                    gal = JSON.parse(req.body.staraGal);
                }else{
                    for(cnt; cnt < g.length; cnt++){
                        gal.push(g[cnt]);
                     }
                     let sg = JSON.parse(req.body.staraGal);
                     for(let i = 0; i < sg.length; i++){
                        gal.push(sg[i]);
                     }
                }
                
                 Radionica.findOneAndUpdate({"_id":idRad}, {"$set":{"naziv":req.body.naziv, "opis":req.body.opis, "dugacakOpis":req.body.dugacakOpis, "mesto":req.body.mesto, "datum":req.body.datum, "glavnaSlika":glSlika, "galerija":gal}}, (err, succ)=>{
                    if(err) console.log(err);
                    else {
                        res.json({"message":"ok"});
                    }
                 })
            }
        })
    }

    prihvatiPredlog = (req:express.Request, res:express.Response)=>{
        let novaRadionica = new Radionica({
            naziv:req.body.naziv,
            glavnaSlika:req.body.glavnaSlika,
            opis:req.body.opis,
            dugacakOpis:req.body.dugacakOpis,
            mesto:req.body.mesto,
            datum:req.body.datum,
            galerija:req.body.galerija,
            organizator:req.body.predlozio,
            brojMesta:20,
            rezervisali:[],
            prisustvovali:[],
            prijavljeni:[],
            komentari:[],
            svidjanja:[]
            })
             novaRadionica.save().then(()=> res.json({'message': 'ok'})).catch((err)=>console.log(err));
    }

    dohvatiAktuelne = (req:express.Request, res:express.Response)=>{
        let trenutni = new Date().toISOString();
        Radionica.find({"datum":{"$gt":trenutni}}, (err, predl)=>{
            if(err) console.log(err);
            else res.json(predl);
        })
    }

    dohvatiRadioniceOrganizator = (req:express.Request, res:express.Response)=>{
        let korisnickoIme = req.body.korisnickoIme;
        Radionica.find({"organizator":korisnickoIme}, (err, rad)=>{
            if(err) console.log(err);
            else res.json(rad);
        })
    }
}