import { Component, OnInit } from '@angular/core';
import { Komentar } from 'src/models/komentar';
import { Korisnik } from 'src/models/korisnik';
import { Radionica } from 'src/models/radionica';
import { Svidjanja } from 'src/models/svidjanja';
import { Ucesnik } from 'src/models/ucesnik';
import { KorisnikService } from '../korisnik.service';
import { RadionicaService } from '../radionica.service';

@Component({
  selector: 'app-radionica-statistika',
  templateUrl: './radionica-statistika.component.html',
  styleUrls: ['./radionica-statistika.component.css']
})
export class RadionicaStatistikaComponent implements OnInit {

  constructor(private radionicaServis:RadionicaService, private korisnikServis:KorisnikService) { }

  ngOnInit(): void {
    let idRad = JSON.parse(localStorage.getItem("detaljiRad"));
    this.komentari = [];
    this.radionicaServis.dohvatiRadionicuId(idRad).subscribe((r:Radionica)=>{
      if(r){
        this.radionica = r;
        this.komentari = r.komentari;
        this.korisnikSvidjanja = r.svidjanja; 
        for(let i = 0; i < this.komentari.length; i++){
          this.korisnikServis.dohvatiKorisnika(this.komentari[i].autor).subscribe((k:Korisnik)=>{
            if(k){
              this.komentari[i].autorIme = k.ime;
              this.komentari[i].slika = k.slika;
              this.komentari[i].datumIspis = this.komentari[i].datum.toString().split('T')[0] + " " + this.komentari[i].datum.toString().split('T')[1].split('.')[0];
            }
          })
        }
        for(let i = 0; i < this.korisnikSvidjanja.length; i++){
          this.korisnikServis.dohvatiKorisnika(this.korisnikSvidjanja[i].ime).subscribe((kor:Korisnik)=>{
            if(kor){
              this.lajk.korisnik = kor.korisnickoIme;
              this.lajk.korisnikIme = kor.ime;
              this.lajk.korisnikPrezime = kor.prezime;
              this.lajk.slika = kor.slika;
              this.svidjanja.push(this.lajk);
              this.proveri();
            }
          })
        }
      }
    })
  }

  posalji(){
    let idRad = JSON.parse(localStorage.getItem("detaljiRad"));
    let korisnickoIme = localStorage.getItem("korisnickoIme");

    this.radionicaServis.dodajKomentar(idRad, korisnickoIme, this.novKomentar).subscribe(r=>{
      if(r){
        window.location.reload();
      }
    })

  }

  novKomentar:string;
  komentari:Komentar[] = [];
  svidjanja:Svidjanja[] = [];
  lajk:Svidjanja = new Svidjanja();
  korisnikSvidjanja:Ucesnik[] = [];
  radionica:Radionica = new Radionica();
  moze:boolean = false;
  nijeLajk:boolean = true;

  proveri(){
    let korisnickoIme = localStorage.getItem("korisnickoIme");
    let idRad = this.radionica._id;
    let nazivRad = this.radionica.naziv;
    let datumRad = this.radionica.datum;
    
    this.radionicaServis.proveriLajk(korisnickoIme, idRad, nazivRad, datumRad).subscribe((r:Radionica[])=>{
      if(r){
        for(let i = 0; i < r.length; i++){
          for(let j = 0; j < r[i].svidjanja.length; j++){
            if(r[i].svidjanja[j].ime == korisnickoIme){
              this.moze = true;
            }
          }
        }
        for(let i = 0; i < this.radionica.svidjanja.length; i++){
          if(this.radionica.svidjanja[i].ime == korisnickoIme){
            this.nijeLajk = false;
          }
        }
      }
    })
  }

  lajkuj(){
    let korisnickoIme = localStorage.getItem("korisnickoIme");
    let idRad = this.radionica._id;
    this.radionicaServis.lajkuj(korisnickoIme, idRad).subscribe(resp=>{
      if(resp){
        window.location.reload();
      }
    })
  }

  odjaviSe(){
    localStorage.clear();
  }

}
