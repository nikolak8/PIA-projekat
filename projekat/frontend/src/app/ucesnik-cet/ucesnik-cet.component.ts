import { Component, OnInit } from '@angular/core';
import { Korisnik } from 'src/models/korisnik';
import { Poruka } from 'src/models/poruka';
import { Radionica } from 'src/models/radionica';
import { Razgovor } from 'src/models/razgovor';
import { KorisnikService } from '../korisnik.service';
import { PorukaService } from '../poruka.service';
import { RadionicaService } from '../radionica.service';

@Component({
  selector: 'app-ucesnik-cet',
  templateUrl: './ucesnik-cet.component.html',
  styleUrls: ['./ucesnik-cet.component.css']
})
export class UcesnikCetComponent implements OnInit {

  constructor(private porukaServis:PorukaService, private korisnikServis:KorisnikService, private radionicaServis:RadionicaService) { }

  ngOnInit(): void {
    let korisnickoIme = localStorage.getItem("korisnickoIme");
    let idRad = localStorage.getItem("poruka");
    this.korisnikServis.dohvatiKorisnika(korisnickoIme).subscribe((k:Korisnik)=>{
      if(k){
        this.ucesnik = k;
        this.radionicaServis.dohvatiRadionicuId(idRad).subscribe((rad:Radionica)=>{
          if(rad){
            this.radionica = rad;
            this.korisnikServis.dohvatiKorisnika(this.radionica.organizator).subscribe((kor:Korisnik)=>{
              if(kor){
                this.organizator = kor;
                
              }
            })
          }
        })
      }
    })
    this.porukaServis.dohvatiPoruke(idRad, korisnickoIme).subscribe((por:Poruka)=>{
      if(por){
        this.poruka = por;
        for(let i = 0; i < por.razgovor.length; i++){
          this.razgovor.push(por.razgovor[i]);
          this.razgovor[i].vremeIspis = this.razgovor[i].vreme.toString().split('T')[0] + " " + this.razgovor[i].vreme.toString().split('T')[1].split('.')[0];
        }
       
    }})
  }

  proveraKorisnika(posiljalac){
    let korisnickoIme = localStorage.getItem("korisnickoIme");
    if(posiljalac == korisnickoIme){
      return true;
    }else{
      return false;
    }
  }

  odjaviSe(){
    localStorage.clear();
  }

  posalji(){
    let korisnickoIme = localStorage.getItem("korisnickoIme");
    let idRad = localStorage.getItem("poruka");
    let korisnickoIme2 = this.organizator.korisnickoIme;
    if(this.poruka){
      this.porukaServis.posaljiPoruku(korisnickoIme, idRad, this.novaPoruka, korisnickoIme2).subscribe(resp=>{
        if(resp){
          window.location.reload();
        }
      })
    } else{
      this.porukaServis.zapocniCet(korisnickoIme, idRad, this.novaPoruka, korisnickoIme2).subscribe(res=>{
        if(res){
          window.location.reload()
        }
      })
    }
    
  }

  poruka:Poruka;
  razgovor:Razgovor[] = [];
  nov:Razgovor = new Razgovor();
  radionica:Radionica = new Radionica();
  novaPoruka:string;
  ucesnik:Korisnik;
  organizator:Korisnik;

}
