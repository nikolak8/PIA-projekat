import express from 'express';
import Poruka from '../models/poruka';

export class PorukaController{
    
    dohvatiSvePoruke = (req:express.Request, res:express.Response)=>{
        let korisnickoIme = req.body.korisnickoIme;
        let idRad = req.body.idRad;
        Poruka.findOne({"korisnickoime1":korisnickoIme, "idRad":idRad}, (err, por)=>{
            if(err) console.log(err);
            else{
                res.json(por);
            }
        })
    }

    dohvatiPorukeOrganizator = (req:express.Request, res:express.Response)=>{
        let korisnickoIme = req.body.korisnickoIme;
        let idRad = req.body.idRad;
        Poruka.find({"korisnickoime2":korisnickoIme, "idRad":idRad}, (err, por)=>{
            if(err) console.log(err);
            else{
                res.json(por);
            }
        })
    }

    dohvatiPorukuOrganizator = (req:express.Request, res:express.Response)=>{
        let korisnickoime1 = req.body.korisnickoime1;
        let idRad = req.body.idRad;
        let korisnickoime2 = req.body.korisnickoIme2;
        Poruka.findOne({"korisnickoime1":korisnickoime1, "korisnickoime2":korisnickoime2, "idRad":idRad}, (err, por)=>{
            if(err) console.log(err);
            else{
                res.json(por);
            }
        })
    }

    posaljiPoruku = (req:express.Request, res:express.Response)=>{
        let korisnickoIme = req.body.korisnickoIme;
        let idRad = req.body.idRad;
        let novaPoruka = req.body.novaPoruka;
        let vreme = new Date();

        Poruka.updateOne({"idRad":idRad, "korisnickoime1":korisnickoIme}, {"$push":{"razgovor":{"posiljalac":korisnickoIme, "text":novaPoruka, "vreme":vreme}}}, (err, succ)=>{
            if(err) console.log(err);
            else res.json({"message":"ok"});
        })
    }
    
    posaljiPorukuOrg = (req:express.Request, res:express.Response)=>{
        let korisnickoime1 = req.body.korisnickoime1;
        let korisnickoime2 = req.body.korisnickoime2;
        let idRad = req.body.idRad;
        let novaPoruka = req.body.novaPor;
        let vreme = new Date();
        console.log(novaPoruka);
        console.log(korisnickoime1)
        console.log(korisnickoime2);
        console.log(idRad);

        Poruka.updateOne({"idRad":idRad, "korisnickoime1":korisnickoime1, "korisnickoime2":korisnickoime2}, {"$push":{"razgovor":{"posiljalac":korisnickoime2, "text":novaPoruka, "vreme":vreme}}}, (err, succ)=>{
            if(err) console.log(err);
            else {
                res.json({"message":"ok"});
            }
        })
    }

    zapocniCet = (req:express.Request, res:express.Response)=>{
        let korisnickoime1 = req.body.korisnickoIme;
        let idRad = req.body.idRad;
        let korisnickoime2 = req.body.korisnickoIme2;
        let novaPoruka = req.body.novaPoruka;
        let vreme = new Date();

        let novaPor = new Poruka({
            korisnickoime1:korisnickoime1,
            idRad:idRad,
            korisnickoime2: korisnickoime2,
            razgovor:[
                {
                    text:novaPoruka,
                    posiljalac:korisnickoime1,
                    vreme:vreme
                }
            ]
        })
        novaPor.save().then(()=> res.json({'message': 'ok'})).catch((err)=>console.log(err));
    }

}