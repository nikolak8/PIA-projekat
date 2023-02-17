import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Radionica } from 'src/models/radionica';
import { RadionicaService } from '../radionica.service';
import { ElementRef, ViewChild } from '@angular/core';




@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.css']
})

export class PocetnaComponent implements OnInit {

 
  constructor(private router:Router, private radionicaServis:RadionicaService) { }

  ngOnInit(): void {
    this.radionicaServis.dohvatiSveRadionice().subscribe((data:Radionica[])=>{
      this.radionice = data;
    })
  }
  radionice = Radionica[''];
  naziv = "";
  mesto = "";
  pretraga = false;
  sortiranje = "";

  pretrazi(){
    this.radionicaServis.dohvatiRadionice(this.naziv, this.mesto).subscribe((data:Radionica[])=>{
      this.radionice = data;
      if((this.naziv != "" || this.mesto != "") && this.radionice.length > 0){
        this.pretraga = true;
      }
    })
  }
  sortiraj(){
    if(this.sortiranje == "naziv"){
      this.radionice.sort((a, b)=>{
        if(a.naziv > b.naziv){
          return 1
        }else{
          return -1;
        }
      })
    } else if(this.sortiranje == "datum"){
      this.radionice.sort((a, b)=>{
        if(a.datum > b.datum){
          return 1
        } else {
          return -1;
        }
      })
    }
  }

  prikaziTop(){
    this.router.navigate(['/top5']);
  }
}

