import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Radionica } from 'src/models/radionica';
import { RadionicaService } from '../radionica.service';

@Component({
  selector: 'app-ucesnik-sve-rad',
  templateUrl: './ucesnik-sve-rad.component.html',
  styleUrls: ['./ucesnik-sve-rad.component.css']
})
export class UcesnikSveRadComponent implements OnInit {

  constructor(private servis:RadionicaService, private router:Router) { }

  ngOnInit(): void {
    this.servis.dohvatiSveRadionice().subscribe((rad:Radionica[])=>{
      if(rad){
        this.mojeRadionice = rad;
      }
    })
  }

  mojeRadionice:Radionica[];

  detalji(id){
    localStorage.setItem("detaljiRad", JSON.stringify(id));
    this.router.navigate(['/ucesnik/sveRadionice/detalji']);
  }

  odjaviSe(){
    localStorage.clear();
  }

}
