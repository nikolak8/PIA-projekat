import express, { Response } from 'express';
import Korisnik from '../models/korisnik';
import multer from 'multer';
const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "4365f785a4c2ed",
      pass: "39eb6a7f04c188"
    }
  });


const Storage = multer.diskStorage({
    destination:'../frontend/src/assets',
    filename:(req, file, cb)=>{
        cb(null,  Date.now() + file.originalname)
    }
});

const upload = multer({
    storage:Storage
}).single('slika');


export class KorisnikController{

    dohvatiSveKorisnike = (req:express.Request, res:express.Response)=>{
        Korisnik.find({"tip":{$ne:0}}, (err, korisnici)=>{
            if(err) console.log(err);
            else{
                res.json(korisnici);
            }
        })
    }

    posaljiMejl = (req:express.Request, res:express.Response)=>{
        let prijavljeni = req.body.prijavljeni;
        let mejlovi = [];
        let txt = "Radionica " + req.body.naziv + " je otkazana!";
        for(let i = 0; i < prijavljeni.length; i++){
            mejlovi.push(prijavljeni[i]);
        }
        let message = {
            from:'nekimejl@email.com',
            to:prijavljeni,
            subject:"Otkazivanje radionice",
            text:txt
        }
        transporter.sendMail(message, function(err, info){
            if(err) console.log(err);
              
        })
        res.json({"message":"ok"})
    }

    promeniLozinku = (req:express.Request, res:express.Response)=>{
        let korisnickoIme = req.body.korisnickoIme;
        let staraLozinka = req.body.staraLozinka;
        let novaLozinka = req.body.novaLozinka;
        Korisnik.findOne({"korisnickoIme":korisnickoIme, "lozinka":staraLozinka}, (err, kor)=>{
            if(err) console.log(err);
            if(!kor){
                res.json({"message":"Pogresna lozinka"});
            }else{
                Korisnik.findOneAndUpdate({"korisnickoIme":korisnickoIme}, {"$set" : {"lozinka":novaLozinka}}, (err, succ)=>{
                    if(err) console.log(err);
                    else res.json({"message":"Promenjena lozinka"});
                })
            }
        })
        }
        
    dohvatiAktivneKorisnike = (req:express.Request, res:express.Response)=>{
        Korisnik.find({$and: [{"tip":{$ne:0}}, {'status':"aktivan"}]},(err, korisnici)=>{
            if(err) console.log(err);
            else{
                res.json(korisnici);
            }
        })
    }

    dohvatiZahteve = (req:express.Request, res:express.Response)=>{
        let status = "neobradjen";
        Korisnik.find({"status":status}, (err, korisnici)=>{
            if(err) console.log(err);
            else{
                res.json(korisnici);
            }
        })
    }

    prihvatiZahtev = (req:express.Request, res:express.Response)=>{
        let korisnickoIme = req.body.korisnickoIme;
        let status = "aktivan";
        Korisnik.findOneAndUpdate({"korisnickoIme":korisnickoIme}, {"$set" : {"status":status}}, (err, succ)=>{
            if(err) console.log(err);
            else res.json({"message":"ok"})
        })
    }

    odbijZahtev = (req:express.Request, res:express.Response)=>{
        let korisnickoIme = req.body.korisnickoIme;
        let status = "neaktivan";
        Korisnik.findOneAndUpdate({"korisnickoIme":korisnickoIme}, {"$set" : {"status":status}}, (err, succ)=>{
            if(err) console.log(err);
            else res.json({"message":"ok"})
        })
    }

    dohvatiKorisnika = (req:express.Request, res:express.Response)=>{
        Korisnik.findOne({"korisnickoIme":req.body.korisnickoIme}, (err, korisnik)=>{
            if(err) console.log(err);
            else{
                res.json(korisnik);
            }
        })
    }

    prijava = (req:express.Request, res:express.Response)=>{
        let korisnickoIme = req.body.korisnickoIme;
        let lozinka = req.body.lozinka;

        Korisnik.findOne({'korisnickoIme':korisnickoIme, 'lozinka':lozinka, 'status':'aktivan'}, (err, korisnik)=>{
            if(err) console.log(err);
            else res.json(korisnik);
        })
    }

    unapredi = (req:express.Request, res:express.Response)=>{
        let korisnickoIme = req.body.korisnickoIme;
        Korisnik.findOneAndUpdate({"korisnickoIme":korisnickoIme}, {"$set":{"tip":1}}, (err, succ)=>{
            if(err) console.log(err);
            else res.json({"message":"ok"});
        })
    }
    registracija = (req:express.Request, res:express.Response)=>{

        upload(req, res, (err)=>{
            if(err){
                console.log(err);
            }else {
                Korisnik.findOne({$and: [{"status":{$ne:"neaktivan"}}, {'email':req.body.email}]}, (err, korisnik)=>{
                    if(korisnik) res.json({"message":"Email vec postoji!"});
                    else{
                        Korisnik.findOne({$and: [{"status":{$ne:"neaktivan"}}, {'korisnickoIme':req.body.korisnickoIme}]}, (err, korisnik)=>{
                            if(korisnik) res.json({"message":"Korisnicko ime vec postoji!"});
                            else{
                                let slika = '';
                                if(!req.file){
                                    slika = 'avatar.png';
                                }else{
                                    slika = req.file.filename;
                                }
                                let brojUlice=null;
                                if(req.body.brojUlice != ""){
                                    brojUlice = Number(req.body.brojUlice);
                                }
                                let tip = Number(req.body.tip);
                                let novKor = new Korisnik({
                                    ime:req.body.ime,
                                    prezime:req.body.prezime,
                                    korisnickoIme:req.body.korisnickoIme,
                                    lozinka:req.body.lozinka,
                                    tip:tip,
                                    telefon:req.body.telefon,
                                    email:req.body.email,
                                    status:"neobradjen",
                                    nazivOrganizacije:req.body.nazivOrganizacije,
                                    drzavaOrganizacije:req.body.drzavaOrganizacije,
                                    gradOrganizacije:req.body.gradOrganizacije,
                                    postanskiBroj:req.body.postanskiBroj,
                                    ulicaOrganizacije:req.body.ulicaOrganizacije,
                                    brojUlice:brojUlice,
                                    maticniBrojOrg:req.body.maticniBrojOrg,
                                    slika:slika
                                })
                                novKor.save().then(()=> res.json({'message': 'ok'})).catch((err)=>console.log(err));
                            }
                        })
                    }
                }
               
                )
              
            }
        })
    }

    azurirajKorisnika = (req:express.Request, res:express.Response)=>{
        upload(req, res, (err)=>{
            if(err){
                console.log(err);
            }else {
                Korisnik.findOne({$and: [{"_id":{$ne:req.body.id}}, {'email':req.body.email}]}, (err, korisnik)=>{
                    if(korisnik) res.json({"message":"Email vec postoji!"});
                    else{
                        Korisnik.findOne({$and: [{"_id":{$ne:req.body.id}}, {'korisnickoIme':req.body.korisnickoIme}]}, (err, korisnik)=>{
                            if(korisnik) res.json({"message":"Korisnicko ime vec postoji!"});
                            else{
                                let slika = '';
                                if(!req.file){
                                    slika = req.body.staraSlika;
                                }else{
                                    slika = req.file.filename;
                                }
                        Korisnik.findOneAndUpdate({"_id":req.body.id}, {"$set" : {"korisnickoIme":req.body.korisnickoIme,
                    "ime":req.body.ime, "prezime":req.body.prezime, "email":req.body.email, "slika":slika, "telefon":req.body.telefon}}, (err, korisnik)=>{
                        if(err) console.log(err);
                        else res.json({"message":"Uspesno azuriran"});
                    })
                    }
                }
               
                )
              
            }
        })
    }
        })
    }

    obrisiKorisnika = (req:express.Request, res:express.Response)=>{
        let korisnickoIme = req.body.korisnickoIme;
        Korisnik.findOneAndRemove({"korisnickoIme":korisnickoIme}, (err, succ)=>{
            if(err) console.log(err);
            else res.json({"message":"izbrisan"});
        })
    }

    dodajKorisnika = (req:express.Request, res:express.Response)=>{

        upload(req, res, (err)=>{
            if(err){
                console.log(err);
            }else {
                Korisnik.findOne({'email':req.body.email}, (err, korisnik)=>{
                    if(korisnik) res.json({"message":"Email vec postoji!"});
                    else{
                        Korisnik.findOne({'korisnickoIme':req.body.korisnickoIme}, (err, korisnik)=>{
                            if(korisnik) res.json({"message":"Korisnicko ime vec postoji!"});
                            else{
                                let slika = '';
                                if(!req.file){
                                    slika = 'avatar.png';
                                }else{
                                    slika = req.file.filename;
                                }
                                let brojUlice=null;
                                if(req.body.brojUlice != ""){
                                    brojUlice = Number(req.body.brojUlice);
                                }
                                let tip = Number(req.body.tip);
                                let novKor = new Korisnik({
                                    ime:req.body.ime,
                                    prezime:req.body.prezime,
                                    korisnickoIme:req.body.korisnickoIme,
                                    lozinka:req.body.lozinka,
                                    tip:tip,
                                    telefon:req.body.telefon,
                                    email:req.body.email,
                                    status:"aktivan",
                                    nazivOrganizacije:req.body.nazivOrganizacije,
                                    drzavaOrganizacije:req.body.drzavaOrganizacije,
                                    gradOrganizacije:req.body.gradOrganizacije,
                                    postanskiBroj:req.body.postanskiBroj,
                                    ulicaOrganizacije:req.body.ulicaOrganizacije,
                                    brojUlice:brojUlice,
                                    maticniBrojOrg:req.body.maticniBrojOrg,
                                    slika:slika
                                })
                                novKor.save().then(()=> res.json({'message': 'ok'})).catch((err)=>console.log(err));
                            }
                        })
                    }
                }
               
                )
              
            }
        })
    }

}