import { Component, OnInit } from '@angular/core';
import { Korisnik } from 'src/models/korisnik';
import { KorisnikService } from '../korisnik.service';

@Component({
  selector: 'app-admin-zahtevi',
  templateUrl: './admin-zahtevi.component.html',
  styleUrls: ['./admin-zahtevi.component.css']
})
export class AdminZahteviComponent implements OnInit {

  constructor(private korisnikServis:KorisnikService) { }

  ngOnInit(): void {
    this.korisnikServis.dohvatiZahteve().subscribe((kor:Korisnik[])=>{
      if(kor){
        this.korisnici = kor;
      }
    })
  }

  korisnici:Korisnik[];

  prihvati(korisnickoIme){
    this.korisnikServis.prihvatiZahtevKor(korisnickoIme).subscribe(resp=>{
      if(resp["message"]=="ok"){
        window.location.reload();
      }
    })
  }

  odbij(korisnickoIme){
    this.korisnikServis.odbijZahtevKor(korisnickoIme).subscribe(resp=>{
      if(resp["message"]=="ok"){
        window.location.reload();
      }
    })
  }

  odjaviSe(){
    localStorage.clear();
  }

}
