import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Radionica } from 'src/models/radionica';
import { RadionicaService } from '../radionica.service';

@Component({
  selector: 'app-organizator-profil',
  templateUrl: './organizator-profil.component.html',
  styleUrls: ['./organizator-profil.component.css']
})
export class OrganizatorProfilComponent implements OnInit {

  constructor(private radionicaServis:RadionicaService, private router:Router) { }

  ngOnInit(): void {
    let korisnickoIme = localStorage.getItem("korisnickoIme");
    this.radionicaServis.dohvatiRadioniceOrganizator(korisnickoIme).subscribe((rad:Radionica[])=>{
      if(rad){
        this.mojeRadionice = rad;
      }
    })
  }

  mojeRadionice:Radionica[] = [];

  poruke(id){
    localStorage.setItem("porukeRadionice", id);
    this.router.navigate(['/organizator/profil/radionica'])
  }

  odjaviSe(){
    localStorage.clear();
  }

}
