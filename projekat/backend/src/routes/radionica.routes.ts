import express from 'express';
import radionica from '../models/radionica';
import { RadionicaController } from '../controllers/radionica.controller';


const radionicaRouter = express.Router();

radionicaRouter.route('/dohvatiSveRadionice').get((req, res)=> new RadionicaController().dohvatiSveRadionice(req, res));
radionicaRouter.route('/dohvatiRadionice').post((req, res)=> new RadionicaController().dohvatiRadionice(req, res));
radionicaRouter.route('/obrisiRadionicu').post((req, res)=> new RadionicaController().obrisiRadionicu(req, res));
radionicaRouter.route('/otkaziPrijavu').post((req, res)=>new RadionicaController().otkaziPrijavu(req, res));
radionicaRouter.route('/dohvatiRadionicuId').post((req, res)=>new RadionicaController().dohvatiRadionicuId(req, res));
radionicaRouter.route('/prijaviMe').post((req, res)=>new RadionicaController().prijaviMe(req, res));
radionicaRouter.route('/azurirajRadionicu').post((req, res)=> new RadionicaController().azurirajRadionicu(req, res));
radionicaRouter.route('/dodajRadionicu').post((req, res)=>new RadionicaController().dodajRadionicu(req, res));
radionicaRouter.route('/dohvatiAktuelne').get((req, res)=>new RadionicaController().dohvatiAktuelne(req, res));
radionicaRouter.route('/prihvatiPredlog').post((req, res)=> new RadionicaController().prihvatiPredlog(req, res));
radionicaRouter.route('/azurirajKomentar').post((req, res)=>new RadionicaController().azurirajKomentar(req, res));
radionicaRouter.route('/obrisiKomentar').post((req, res)=>new RadionicaController().obrisiKomentar(req, res));
radionicaRouter.route('/povuciSvidjanje').post((req, res)=> new RadionicaController().povuciSvidjanje(req, res));
radionicaRouter.route('/dodajKomentar').post((req, res)=> new RadionicaController().dodajKomentar(req, res));
radionicaRouter.route('/proveriLajk').post((req, res)=> new RadionicaController().proveriLajk(req, res));
radionicaRouter.route('/lajkuj').post((req, res)=>new RadionicaController().lajkuj(req, res));
radionicaRouter.route('/dohvatiRadioniceOrganizator').post((req, res)=>new RadionicaController().dohvatiRadioniceOrganizator(req, res));
radionicaRouter.route('/prihvatiPrijavu').post((req, res)=>new RadionicaController().prihvatiPrijavu(req, res));
radionicaRouter.route('/odbijPrijavu').post((req, res)=> new RadionicaController().odbijPrijavu(req, res));
radionicaRouter.route('/sacuvajSablon').post((req, res)=> new RadionicaController().sacuvajSablon(req, res));
radionicaRouter.route('/preuzmi').get((req, res)=> new RadionicaController().preuzmi(req, res));
radionicaRouter.route('/ukloniIzGalerije').post((req, res)=> new RadionicaController().ukloniIzGalerije(req, res));
radionicaRouter.route('/azurirajRadionicuOrganizator').post((req, res)=> new RadionicaController().azurirajRadionicuOrganizator(req, res));
radionicaRouter.route('/otkaziRadionicu').post((req, res)=> new RadionicaController().otkaziRadionicu(req, res));


export default radionicaRouter;