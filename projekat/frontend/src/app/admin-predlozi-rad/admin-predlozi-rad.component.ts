import { Component, OnInit } from '@angular/core';
import { Predlog } from 'src/models/predlog';
import { Radionica } from 'src/models/radionica';
import { Ucesnik } from 'src/models/ucesnik';
import { KorisnikService } from '../korisnik.service';
import { PredlogService } from '../predlog.service';
import { RadionicaService } from '../radionica.service';

@Component({
  selector: 'app-admin-predlozi-rad',
  templateUrl: './admin-predlozi-rad.component.html',
  styleUrls: ['./admin-predlozi-rad.component.css']
})
export class AdminPredloziRadComponent implements OnInit {

  constructor(private predlogServis:PredlogService, private radionicaServis:RadionicaService, private korisnikServis:KorisnikService) { }

  ngOnInit(): void {
    this.predlogServis.dohvatiAktuelne().subscribe((pr:Predlog[])=>{
      if(pr){
        this.predlozi = pr;
        this.radionicaServis.dohvatiAktuelneRadionice().subscribe((r:Radionica[])=>{
          if(r){
            this.radionice = r;
            for(let i = 0; i < this.predlozi.length; i++){
              let ime = this.predlozi[i].predlozio;
              this.predlozi[i].moze = true;
              for(let j = 0; j < this.radionice.length; j++){
                for(let k = 0; k < this.radionice[i].prijavljeni.length; k++){
                  if(this.radionice[i].prijavljeni[j].ime == ime){
                    this.predlozi[i].moze = false;
                  }
                }
              }
            }
          }
        })
      }
    })  
  }

  predlozi:Predlog[];
  radionice:Radionica[];
  ucesnik:Ucesnik;

  prihvati(predlog){
    let id = predlog._id;
    let korisnickoIme = predlog.predlozio;
    let naziv = predlog.naziv;
    let glavnaSlika = predlog.glavnaSlika;
    let datum = predlog.datum;
    let mesto = predlog.mesto;
    let opis = predlog.opis;
    let dugacakOpis = predlog.dugacakOpis;
    let galerija = predlog.galerija;
    const data = {
      naziv: naziv,
      glavnaSlika:glavnaSlika,
      datum:datum,
      mesto:mesto,
      opis:opis,
      dugacakOpis:dugacakOpis,
      galerija:galerija,
      predlozio:korisnickoIme
    } 
    this.radionicaServis.prihvatiPredlog(data).subscribe(resp=>{
      if(resp["message"]){
        this.predlogServis.obrisiPredlog(id).subscribe(res=>{
          if(resp["message"]){
            this.korisnikServis.unaprediKorisnika(korisnickoIme).subscribe(resp=>{
              if(resp["message"]){
                window.location.reload()
              }
            })
          }
        })
      }
    })
  }

  odjaviSe(){
    localStorage.clear();
  }

}
