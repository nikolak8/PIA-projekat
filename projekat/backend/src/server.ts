import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import radionicaRouter from './routes/radionica.routes';
import radionica from './models/radionica';
import multer from 'multer';
import { Date } from 'mongoose';
import korisnikRouter from './routes/korisnik.routes';
import predlogRouter from './routes/predlog.routes';
import porukaRouter from './routes/poruka.routes';



const Storage = multer.diskStorage({
    destination:'../frontend/src/assets',
    filename:(req, file, cb)=>{
        cb(null,  Date.now() + file.originalname)
    }
});

const upload = multer({
    storage:Storage
}).single('testImage');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/upload', (req, res)=>{
    upload(req, res, (err)=>{
        if(err){
            console.log(err);
        } else{
            const newRad = new radionica({
                naziv:req.body.naziv,
                opis:req.body.opis,
                datum:req.body.datum,
                mesto:req.body.mesto,
                glavnaSlika: req.file.filename
            })
            newRad.save().then(()=> res.send("created")).catch((err)=>console.log(err));
        }
    })
})


mongoose.connect('mongodb://127.0.0.1:27017/projekat');
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("mongo connected");
})

const router = express.Router();


router.use('/radionice', radionicaRouter);
router.use('/korisnik', korisnikRouter);
router.use('/predlozi', predlogRouter);
router.use('/poruke', porukaRouter);

app.use('/', router);
app.get('/download', (req, res)=>{
    res.download("sablon.json");
})


app.listen(4000, () => console.log(`Express server running on port 4000`));



