import { Component, OnInit } from '@angular/core';
import { Korisnik } from 'src/models/korisnik';
import { Poruka } from 'src/models/poruka';
import { PorukaOrg } from 'src/models/porukaOrg';
import { KorisnikService } from '../korisnik.service';
import { PorukaService } from '../poruka.service';
import { Razgovor } from 'src/models/razgovor';
import { Ucesnik } from 'src/models/ucesnik';

@Component({
  selector: 'app-organizator-detalji',
  templateUrl: './organizator-detalji.component.html',
  styleUrls: ['./organizator-detalji.component.css']
})
export class OrganizatorDetaljiComponent implements OnInit {

  constructor(private porukeServis:PorukaService, private korisnikServis:KorisnikService) { }

  ngOnInit(): void {
    let korisnickoIme = localStorage.getItem("korisnickoIme");
    let idRad = localStorage.getItem("porukeRadionice");
    this.porukeServis.dohvatiPorukeOrganizator(korisnickoIme, idRad).subscribe((por:Poruka[])=>{
      if(por){
        this.cetovi = por;
        this.korisnikServis.dohvatiKorisnika(korisnickoIme).subscribe((k:Korisnik)=>{
          if(k){
            this.organizator = k;
            for(let i = 0; i < this.cetovi.length; i++){
              this.korisnikServis.dohvatiKorisnika(this.cetovi[i].korisnickoime1).subscribe((kor:Korisnik)=>{
                if(kor){
                  this.novaPor.korisnickoime2 = this.organizator.korisnickoIme;
                  this.novaPor.ime2 = this.organizator.ime;
                  this.novaPor.prezime2 = this.organizator.prezime;
                  this.novaPor.slika2 = this.organizator.slika
                  this.novaPor.korisnickoime1 = kor.korisnickoIme;
                  this.novaPor.ime1 = kor.ime;
                  this.novaPor.prezime1 = kor.prezime;
                  this.novaPor.slika1 = kor.slika;
                  this.novaPor.idRad = this.cetovi[i].idRad
                  this.novaPor.razgovor = this.cetovi[i].razgovor;
                  this.poruke.push(this.novaPor);
                }
              })
            }
          }
        })
      }
    })
  }

  cetovi:Poruka[] = [];
  ucesnik:Korisnik = new Korisnik();
  organizator:Korisnik;
  poruke:PorukaOrg[] = [];
  novaPor:PorukaOrg = new PorukaOrg();
  razgovor:Razgovor[] = [];
  novaPoruka:string;
  id:number;
  r:Razgovor = new Razgovor();


  detaljiCet(i){
    this.id = i;
    this.razgovor = this.poruke[i].razgovor;
    this.ucesnik.ime = this.poruke[i].ime1;
    this.ucesnik.prezime = this.poruke[i].prezime1;
    this.ucesnik.slika = this.poruke[i].slika1;
    this.ucesnik.korisnickoIme = this.poruke[i].korisnickoime1;
    for(let j = 0; j < this.razgovor.length; j++){
      this.razgovor[j].vremeIspis = this.razgovor[j].vreme.toString().split('T')[0] + " " + this.razgovor[j].vreme.toString().split('T')[1].split('.')[0];
    }
  }

  proveraKorisnika(posiljalac){
    let korisnickoIme = localStorage.getItem("korisnickoIme");
    if(posiljalac == korisnickoIme){
      return true;
    }else{
      return false;
    }
  }


  posalji(){
    let korisnickoIme = localStorage.getItem("korisnickoIme");
    let idRad = localStorage.getItem("porukeRadionice");
    let korisnickoImeUcesnik = this.ucesnik.korisnickoIme;

    this.porukeServis.posaljiPorukuOrg(idRad, korisnickoIme, korisnickoImeUcesnik, this.novaPoruka).subscribe(resp=>{
      if(resp){
        this.r.text = this.novaPoruka;
        this.r.posiljalac = korisnickoIme;
        let vr = new Date().toISOString();
        this.r.vremeIspis = vr.toString().split('T')[0] + " " + vr.toString().split('T')[1].split('.')[0];
        this.razgovor.push(this.r);
        this.novaPoruka = '';
      }
    })
  }

  odjaviSe(){
    localStorage.clear();
  }


}
