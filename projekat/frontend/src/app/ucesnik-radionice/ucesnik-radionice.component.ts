import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Radionica } from 'src/models/radionica';
import { RadionicaService } from '../radionica.service';

@Component({
  selector: 'app-ucesnik-radionice',
  templateUrl: './ucesnik-radionice.component.html',
  styleUrls: ['./ucesnik-radionice.component.css']
})
export class UcesnikRadioniceComponent implements OnInit {

  constructor(private radioniceServis:RadionicaService, private router:Router) { }

  ngOnInit(): void {
    let korisnickoIme = localStorage.getItem("korisnickoIme");
    this.radioniceServis.dohvatiSveRadionice().subscribe((rad:Radionica[])=>{
      if(rad){
        this.sveRadionice = rad;
        for(let i = 0; i < rad.length; i++){
          for(let j = 0; j < rad[i].prijavljeni.length; j++){
            if(rad[i].prijavljeni[j].ime == korisnickoIme){
              this.mojeRadionice.push(rad[i]);
            }
          }
        }
      }
    })
  }

  sveRadionice:Radionica[];
  mojeRadionice:Radionica[] = [];

  proveriVreme(dat){
    let sad = new Date();
    let datum = new Date(dat);
    let razlika = datum.getTime() - sad.getTime();
    let sati = razlika / (1000 * 60 * 60)
    if(sati >=12){
      return true;
    }else{
      return false;
    }
  }

  otkazi(id){
    let korisnickoIme = localStorage.getItem("korisnickoIme");
    this.radioniceServis.otkaziPrijavu(id, korisnickoIme).subscribe(resp=>{
      if(resp["message"]=="ok"){
        window.location.reload();
      }
    })
  }

  prikaziSve(){
    this.router.navigate(["/ucesnik/sveRadionice"]);
  }

  odjaviSe(){
    localStorage.clear();
  }

}
