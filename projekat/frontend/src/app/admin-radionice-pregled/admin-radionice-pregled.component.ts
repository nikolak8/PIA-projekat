import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Radionica } from 'src/models/radionica';
import { RadionicaService } from '../radionica.service';

@Component({
  selector: 'app-admin-radionice-pregled',
  templateUrl: './admin-radionice-pregled.component.html',
  styleUrls: ['./admin-radionice-pregled.component.css']
})
export class AdminRadionicePregledComponent implements OnInit {

  constructor(private servisRadionica:RadionicaService, private router:Router) { }

  ngOnInit(): void {
    this.servisRadionica.dohvatiSveRadionice().subscribe((rad:Radionica[])=>{
      if(rad){
        this.radionice = rad;
      }
    })
  }

  naziv:string;
  opis:string;
  datum:Date;
  mesto:string;
  glavnaSlika;
  radionice:Radionica[];

  azuriraj(id){
    localStorage.setItem("azuriranjeRad", id);
    this.router.navigate(["/admin/radionice/azuriraj"])
  }

  obrisi(id){
    this.servisRadionica.obrisi(id).subscribe(resp=>{
      if(resp["message"]){
        window.location.reload();
      }
    })
  }

  odjaviSe(){
    localStorage.clear();
  }

}
