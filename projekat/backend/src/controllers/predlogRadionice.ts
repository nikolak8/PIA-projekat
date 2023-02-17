import express, { Response } from 'express';
import predlogRadionice from '../models/predlogRadionice';
import multer from 'multer';

const Storage = multer.diskStorage({
    destination:'../frontend/src/assets',
    filename:(req, file, cb)=>{
        cb(null,  Date.now() + file.originalname)
    }
});


const uploadVise = multer({
    storage:Storage
}).array('galerija[]');

export class PredlogController{
    
    dodaj = (req:express.Request, res:express.Response)=>{
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
    
                let novPredlog = new predlogRadionice({
                    naziv:req.body.naziv,
                    glavnaSlika:glSlika,
                    opis:req.body.opis,
                    dugacakOpis:req.body.dugacakOpis,
                    predlozio:req.body.predlozio,
                    mesto:req.body.mesto,
                    datum:req.body.datum,
                    galerija:gal
                })
                novPredlog.save().then(()=> res.json({'message': 'ok'})).catch((err)=>console.log(err));
            }
        })
    }

    dohvatiAktuelne = (req:express.Request, res:express.Response)=>{
        let trenutni = new Date();
        predlogRadionice.find({"datum":{"$gt":trenutni}}, (err, predl)=>{
            if(err) console.log(err);
            else res.json(predl);
        })
    }

    obrisi = (req:express.Request, res:express.Response)=>{
        let id = req.body.id;
        predlogRadionice.findOneAndRemove({"_id":id}, (err, succ)=>{
            if(err) console.log(err);
            else res.json({"message":"ok"});
        })
    }

    dodajOrganizator = (req:express.Request, res:express.Response)=>{
        uploadVise(req, res, (err)=>{
            if(err) console.log(err);
            else{
                let g = [];
                let gal = [];
                let glSlika;
                let galerija;
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
                    console.log(gal);
                }else{
                    for(cnt; cnt < g.length; cnt++){
                        gal.push(g[cnt]);
                     }
                     let sg = JSON.parse(req.body.staraGal);
                     for(let i = 0; i < sg.length; i++){
                        gal.push(sg[i]);
                     }
                }
                let novPredlog = new predlogRadionice({
                    naziv:req.body.naziv,
                    glavnaSlika:glSlika,
                    opis:req.body.opis,
                    dugacakOpis:req.body.dugacakOpis,
                    predlozio:req.body.predlozio,
                    mesto:req.body.mesto,
                    datum:req.body.datum,
                    galerija:gal
                })
                novPredlog.save().then(()=> res.json({'message': 'ok'})).catch((err)=>console.log(err));
            }
        })
    }
    
}