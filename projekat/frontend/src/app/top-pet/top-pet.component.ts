import { Component, OnInit } from '@angular/core';
import { Radionica } from 'src/models/radionica';
import { RadionicaService } from '../radionica.service';

@Component({
  selector: 'app-top-pet',
  templateUrl: './top-pet.component.html',
  styleUrls: ['./top-pet.component.css']
})
export class TopPetComponent implements OnInit {

  constructor(private radionicaServis:RadionicaService) { }

  ngOnInit(): void {
    this.radionicaServis.dohvatiSveRadionice().subscribe((rad:Radionica[])=>{
      if(rad){
        this.sveRadionice = rad;
        this.sveRadionice.sort((a, b)=>{
          if(a.svidjanja.length > b.svidjanja.length){
            return -1;
          }else{
            return 1;
          }
        })
        if(this.sveRadionice.length > 5){
          this.duzina = 5;
        }else{
          this.duzina = this.sveRadionice.length;
        }
        for(let i = 0; i < this.duzina; i++){
          this.radionice.push(this.sveRadionice[i]);
        }
      }
    })
  }

  radionice:Radionica[] = [];
  sveRadionice:Radionica[];
  duzina;

}
