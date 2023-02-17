import express from 'express';
import { PorukaController } from '../controllers/poruka.controller';

const porukaRouter = express.Router();

porukaRouter.route('/dohvatiSvePoruke').post((req, res)=> new PorukaController().dohvatiSvePoruke(req, res));
porukaRouter.route('/posaljiPoruku').post((req, res)=> new PorukaController().posaljiPoruku(req, res));
porukaRouter.route('/zapocniCet').post((req, res)=>new PorukaController().zapocniCet(req, res));
porukaRouter.route('/dohvatiPorukeOrganizator').post((req, res)=> new PorukaController().dohvatiPorukeOrganizator(req, res));
porukaRouter.route('/posaljiPorukuOrg').post((req, res)=> new PorukaController().posaljiPorukuOrg(req, res));
porukaRouter.route('/dohvatiPorukuOrg').post((req, res)=> new PorukaController().dohvatiPorukuOrganizator(req, res));


export default porukaRouter;