import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Radionica } from 'src/models/radionica';
import { Ucesnik } from 'src/models/ucesnik';
import { RadionicaService } from '../radionica.service';

@Component({
  selector: 'app-ucesnik-prisustvovao',
  templateUrl: './ucesnik-prisustvovao.component.html',
  styleUrls: ['./ucesnik-prisustvovao.component.css']
})
export class UcesnikPrisustvovaoComponent implements OnInit {

  constructor(private radioniceServis:RadionicaService, private router:Router) { }

  ngOnInit(): void {
    let korisnickoIme = localStorage.getItem("korisnickoIme");
    this.radioniceServis.dohvatiSveRadionice().subscribe((rad:Radionica[])=>{
      if(rad){
        this.sveRadionice = rad;
        for(let i = 0; i < rad.length; i++){
          for(let j = 0; j < rad[i].prisustvovali.length; j++){
            if(rad[i].prisustvovali[j].ime == korisnickoIme){
              this.mojeRadionice.push(rad[i]);
            }
          }
        }
      }
    })
  }

  sveRadionice:Radionica[];
  mojeRadionice:Radionica[] = [];
  sortiranje:string;
  
  sortiraj(){
    if(this.sortiranje == "naziv"){
      this.mojeRadionice.sort((a, b)=>{
        if(a.naziv > b.naziv){
          return 1
        }else{
          return -1;
        }
      })
    } else if(this.sortiranje == "datum"){
      this.mojeRadionice.sort((a, b)=>{
        if(a.datum > b.datum){
          return 1
        } else {
          return -1;
        }
      })
    } else if(this.sortiranje == "mesto"){
      this.mojeRadionice.sort((a, b)=>{
        if(a.mesto > b.mesto){
          return 1;
        } else{
          return -1;
        }
      })
    } else if(this.sortiranje == "opis"){
      this.mojeRadionice.sort((a, b)=>{
        if(a.opis > b.opis){
          return 1;
        } else {
          return -1;
        }
      })
    }
  }

  odjaviSe(){
    localStorage.clear();
  }

}
