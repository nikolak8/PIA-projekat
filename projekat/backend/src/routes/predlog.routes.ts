import express from 'express';
import predlogRadionice from '../models/predlogRadionice';
import { PredlogController } from '../controllers/predlogRadionice';

const predlogRouter = express.Router();

predlogRouter.route('/dodaj').post((req, res)=>new PredlogController().dodaj(req, res));
predlogRouter.route('/dohvatiAktuelne').get((req, res)=>new PredlogController().dohvatiAktuelne(req, res));
predlogRouter.route('/obrisi').post((req, res)=>new PredlogController().obrisi(req, res));
predlogRouter.route('/dodajOrganizator').post((req, res)=> new PredlogController().dodajOrganizator(req, res));

export default predlogRouter;