import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from 'src/models/korisnik';
import { KorisnikService } from '../korisnik.service';

@Component({
  selector: 'app-admin-pregled',
  templateUrl: './admin-pregled.component.html',
  styleUrls: ['./admin-pregled.component.css']
})
export class AdminPregledComponent implements OnInit {

  constructor(private servis:KorisnikService, private router:Router) { }

  ngOnInit(): void {
    this.servis.dohvatiAktivneKorisnike().subscribe((kor:Korisnik[])=>{
      if(kor){
        this.korisnici = kor;
      }
    })
  }

  korisnici:Korisnik[];

  obrisi(korisnickoIme){
    this.servis.obrisiKorisnika(korisnickoIme).subscribe(resp=>{
      if(resp["message"]=="izbrisan"){
        window.location.reload();
      }
    })
  }

  azuriraj(korisnickoIme){
    localStorage.setItem("azuriranjeKor", korisnickoIme);
    this.router.navigate(["/admin/korisnici/azuriraj"])
  }

  odjaviSe(){
    localStorage.clear();
  }

}
