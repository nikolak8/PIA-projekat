import express from 'express';
import Korisnik from '../models/korisnik';
import { KorisnikController } from '../controllers/korisnik.controller';

const korisnikRouter = express.Router();

korisnikRouter.route('/dohvatiSveKorisnike').get((req, res)=> new KorisnikController().dohvatiSveKorisnike(req, res));
korisnikRouter.route('/prijava').post((req, res)=> new KorisnikController().prijava(req, res));
korisnikRouter.route('/registracija').post((req, res)=> new KorisnikController().registracija(req, res));
korisnikRouter.route('/dohvatiKorisnika').post((req, res)=>new KorisnikController().dohvatiKorisnika(req, res));
korisnikRouter.route('/azurirajKorisnika').post((req, res)=>new KorisnikController().azurirajKorisnika(req, res));
korisnikRouter.route('/obrisiKorisnika').post((req, res)=> new KorisnikController().obrisiKorisnika(req, res));
korisnikRouter.route('/dodajKorisnika').post((req, res)=>new KorisnikController().dodajKorisnika(req, res));
korisnikRouter.route('/dohvatiZahteve').get((req, res)=>new KorisnikController().dohvatiZahteve(req, res));
korisnikRouter.route('/prihvatiZahtev').post((req, res)=> new KorisnikController().prihvatiZahtev(req, res));
korisnikRouter.route('/odbijZahtev').post((req, res)=> new KorisnikController().odbijZahtev(req, res));
korisnikRouter.route('/dohvatiAktivneKorisnike').get((req, res)=> new KorisnikController().dohvatiAktivneKorisnike(req, res));
korisnikRouter.route('/promeniLozinku').post((req, res)=>new KorisnikController().promeniLozinku(req, res));
korisnikRouter.route('/unapredi').post((req, res)=> new KorisnikController().unapredi(req, res));
korisnikRouter.route('/posaljiMejl').post((req, res)=> new KorisnikController().posaljiMejl(req, res));


export default korisnikRouter;