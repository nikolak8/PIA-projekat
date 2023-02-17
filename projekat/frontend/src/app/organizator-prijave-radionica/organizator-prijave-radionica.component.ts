import { Component, OnInit } from '@angular/core';
import { Radionica } from 'src/models/radionica';
import { RadionicaService } from '../radionica.service';
import { Ucesnik } from 'src/models/ucesnik';

@Component({
  selector: 'app-organizator-prijave-radionica',
  templateUrl: './organizator-prijave-radionica.component.html',
  styleUrls: ['./organizator-prijave-radionica.component.css']
})
export class OrganizatorPrijaveRadionicaComponent implements OnInit {

  constructor(private servisRadionica:RadionicaService) { }

  ngOnInit(): void {
    let idRad = localStorage.getItem("radionicaPrijave");
    this.servisRadionica.dohvatiRadionicuId(idRad).subscribe((rad:Radionica)=>{
      if(rad){
        this.radionica = rad;
        this.ucesnici = rad.rezervisali;
      }
    })
  }

  radionica:Radionica;
  ucesnici:Ucesnik[] = [];

  prihvati(ime){
    let idRad = this.radionica._id;
    this.servisRadionica.prihvatiPrijavu(idRad, ime).subscribe(resp=>{
      if(resp){
        window.location.reload();
      }
    })
  }

  odbij(ime){
    let idRad = this.radionica._id;
    this.servisRadionica.odbijPrijavu(idRad, ime).subscribe(resp=>{
      if(resp){
        window.location.reload();
      }
    })
  }

  odjaviSe(){
    localStorage.clear();
  }

}
