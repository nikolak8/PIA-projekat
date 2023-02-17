import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Radionica } from 'src/models/radionica';
import { Slika } from 'src/models/slika';
import { RadionicaService } from '../radionica.service';

@Component({
  selector: 'app-radionica-prikaz',
  templateUrl: './radionica-prikaz.component.html',
  styleUrls: ['./radionica-prikaz.component.css']
})
export class RadionicaPrikazComponent implements OnInit {

  constructor(private servis:RadionicaService, private router:Router) { }

  ngOnInit(): void {
    let korisnickoIme = localStorage.getItem("korisnickoIme");
    let id = JSON.parse(localStorage.getItem("detaljiRad"));
    this.servis.dohvatiRadionicuId(id).subscribe((rad:Radionica)=>{
      if(rad){
        this.r = rad;
        this.naziv = rad.naziv;
        this.mesto = rad.mesto;
        this.opis = rad.opis;
        this.datum = rad.datum;
        this.glavnaSlika = rad.glavnaSlika;
        this.dugacakOpis = rad.dugacakOpis;
        this.galerija = rad.galerija;
        this.brojMesta = rad.brojMesta
        this.id = rad._id;
        for(let i = 0; i < rad.rezervisali.length; i++){
          if(rad.rezervisali[i].ime == korisnickoIme){
            this.nijePrijavio = false;
          }
        }
        for(let i = 0; i < rad.prijavljeni.length; i++){
          if(rad.prijavljeni[i].ime == korisnickoIme){
            this.nijePrijavio = false;
          }
        }
      }
    })
  }

  r:Radionica;
  naziv;
  mesto;
  opis;
  datum;
  glavnaSlika;
  dugacakOpis;
  galerija:Slika[];
  brojMesta;
  id;
  poruka;
  nijePrijavio = true;

  prijavi(){
    let korisnickoIme = localStorage.getItem("korisnickoIme");
    this.servis.prijaviMe(korisnickoIme, this.id).subscribe(resp=>{
      if(resp["message"]=="ok"){
        this.poruka = "Uspesno ste poslali prijavu!";
      }
    })

  }

  reaguj(){
    this.router.navigate(["/ucesnik/sveRadionice/statistika"]);
  }

  obavesti(){

  }

  odjaviSe(){
    localStorage.clear();
  }


}
