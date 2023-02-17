import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Radionica } from 'src/models/radionica';
import { RadionicaService } from '../radionica.service';

@Component({
  selector: 'app-ucesnik-sve-poruke',
  templateUrl: './ucesnik-sve-poruke.component.html',
  styleUrls: ['./ucesnik-sve-poruke.component.css']
})
export class UcesnikSvePorukeComponent implements OnInit {

  constructor(private radServis:RadionicaService, private router:Router) { }

  ngOnInit(): void {
    this.radServis.dohvatiSveRadionice().subscribe((rad:Radionica[])=>{
      if(rad){
        this.radionice = rad;
      }
    })
  }

  radionice:Radionica[];

  prikaziPoruke(id){
    localStorage.setItem("poruka", id);
    this.router.navigate(["/ucesnik/cet"]);
  }

  odjaviSe(){
    localStorage.clear();
  }

}
