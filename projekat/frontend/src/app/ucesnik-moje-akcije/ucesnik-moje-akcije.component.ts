import { Component, OnInit } from '@angular/core';
import { Komentar } from 'src/models/komentar';
import { Radionica } from 'src/models/radionica';
import { RadionicaService } from '../radionica.service';

@Component({
  selector: 'app-ucesnik-moje-akcije',
  templateUrl: './ucesnik-moje-akcije.component.html',
  styleUrls: ['./ucesnik-moje-akcije.component.css']
})
export class UcesnikMojeAkcijeComponent implements OnInit {

  constructor(private radionicaServis:RadionicaService) { }

  ngOnInit(): void {
  }

  radionice:Radionica[];
  prikazi:string;
  komentari:Komentar[] = [];
  novKom:Komentar = new Komentar();
  nov = Array(this.komentari.length).fill("");
  svidjanjaRad:Radionica[] = [];
  porukaKom:string = "";
  porukaLajk:string = "";

  inicijalizuj(){
    if(this.prikazi == "komentar"){
    this.svidjanjaRad = [];
    this.porukaLajk = '';
    let korisnickoIme = localStorage.getItem("korisnickoIme");
    this.radionicaServis.dohvatiSveRadionice().subscribe((rad:Radionica[])=>{
      if(rad){
        this.radionice = rad;
        for(let i = 0; i < this.radionice.length; i++){
          for(let j = 0; j < this.radionice[i].komentari.length; j++){
            if(this.radionice[i].komentari[j].autor == korisnickoIme){
              this.novKom = new Komentar();
              this.novKom.autor = korisnickoIme;
              this.novKom.komentar = this.radionice[i].komentari[j].komentar
              this.novKom.naziv = this.radionice[i].naziv;
              this.novKom.idRad = this.radionice[i]._id;
              this.komentari.push(this.novKom);
            }
          }
        }
        if(this.komentari.length == 0){
          this.porukaKom = "Nemate komentare!";
        }
      } 
    })
    } else if(this.prikazi == "lajk"){
      this.komentari = [];
      this.porukaKom = '';
      let korisnickoIme = localStorage.getItem("korisnickoIme");
      this.radionicaServis.dohvatiSveRadionice().subscribe((rad:Radionica[])=>{
        if(rad){
          this.radionice = rad;
          for(let i = 0; i < rad.length; i++){
            for(let j = 0; j < rad[i].svidjanja.length; j++){
              if(rad[i].svidjanja[j].ime == korisnickoIme){
                this.svidjanjaRad.push(rad[i]);
              }
            }
          }
          if(this.svidjanjaRad.length == 0){
            this.porukaLajk = "Nemate svidjanja!";
          }
        }
      })
    }
  }

  azuriraj(k, i){
    let korisnickoIme = k.autor;
    let timestamp = k.timestamp;
    let idRad = k.idRad;
    let kom = this.nov[i];
    const data = {
      autor:korisnickoIme,
      komentar:kom,
      timestamp:timestamp,
      idRad:idRad
    }
    this.radionicaServis.azurirajKomentar(data).subscribe(resp=>{
      if(resp["message"]){
        window.location.reload();
      }
    })

  }

  odjaviSe(){
    localStorage.clear();
  }

  obrisi(k){
    let korisnickoIme = k.autor;
    let timestamp = k.timestamp;
    let idRad = k.idRad;
    const data = {
      autor:korisnickoIme,
      timestamp:timestamp,
      idRad:idRad
    }

    this.radionicaServis.obrisiKomentar(data).subscribe(resp=>{
      if(resp["message"]){
        window.location.reload();
      }
    })
  }

  povuci(rad){
    let korisnickoIme = localStorage.getItem("korisnickoIme");
    let idRad = rad._id;
    const data = {
      ime:korisnickoIme,
      idRad:idRad
    }

    this.radionicaServis.povuciSvidjanje(data).subscribe(resp=>{
      if(resp["message"]){
        window.location.reload();
      }
    })
  }


}
