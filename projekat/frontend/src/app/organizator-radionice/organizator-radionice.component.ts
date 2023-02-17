import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from 'src/models/korisnik';
import { Radionica } from 'src/models/radionica';
import { KorisnikService } from '../korisnik.service';
import { RadionicaService } from '../radionica.service';

@Component({
  selector: 'app-organizator-radionice',
  templateUrl: './organizator-radionice.component.html',
  styleUrls: ['./organizator-radionice.component.css']
})
export class OrganizatorRadioniceComponent implements OnInit {

  constructor(private radioniceServis:RadionicaService, private router:Router, private korisnikServis:KorisnikService) { }

  ngOnInit(): void {
    this.radioniceServis.dohvatiSveRadionice().subscribe((rad:Radionica[])=>{
      if(rad){
        this.mojeRadionice = rad;
      }
    })
  }

  mojeRadionice:Radionica[] = [];
  mejlovi:string[] = [];

  proveriOrganizatora(organizator){
    let korisnickoIme = localStorage.getItem("korisnickoIme");
    if(korisnickoIme == organizator){
      return true;
    }else{
      return false;
    }
  }

  uredi(id){
    localStorage.setItem("radionicaAzuriranje", id);
    this.router.navigate(['/organizator/sveRadionice/detalji']);

  }

  prijave(id){
    localStorage.setItem("radionicaPrijave", id);
    this.router.navigate(['/organizator/sveRadionice/prijave']);
  }

  otkazi(id, naziv){

    this.radioniceServis.otkaziRadionicu(id).subscribe((rad:Radionica)=>{
      if(rad){
        for(let i = 0; i < rad.prijavljeni.length; i++){
          this.korisnikServis.dohvatiKorisnika(rad.prijavljeni[i].ime).subscribe((k:Korisnik)=>{
            if(k){
              this.mejlovi.push(k.email);
            }
            this.korisnikServis.posaljiMejl(this.mejlovi, naziv).subscribe(resp=>{
              if(resp){
                window.location.reload();
              }
            })
          })
        }
        
      }
    })
  }

  sacuvaj(id){ 
      this.radioniceServis.sacuvajSablon(id).subscribe(r=>{
        if(r){
          this.radioniceServis.preuzmi().subscribe(resp=>{
            window.open('http://localhost:4000/radionice/preuzmi');
          })
          }
        })
      }

      odjaviSe(){
        localStorage.clear();
      }
}
