import { Component, OnInit } from '@angular/core';
import { PredlogService } from '../predlog.service';

@Component({
  selector: 'app-ucesnik-dodaje-rad',
  templateUrl: './ucesnik-dodaje-rad.component.html',
  styleUrls: ['./ucesnik-dodaje-rad.component.css']
})
export class UcesnikDodajeRadComponent implements OnInit {

  constructor(private predlogServis:PredlogService) { }

  ngOnInit(): void {
  }

  izaberiSliku(event){
    if(event.target.files.length>0){
      const file = event.target.files[0];
      this.slika = file;
    }
  }

  izaberiGaleriju(event){
    if(event.target.files.length > 0){
      for(let i = 0; i < event.target.files.length; i++){
        this.probna.push(event.target.files[i]);
      }
    }
  }

  naziv:string;
  mesto:string;
  datum:Date;
  slika;
  galerija:string[] = [];
  probna:string[] = [];
  opis:string;
  dugacakOpis:string;
  poruka:string;

  predlozi(){

    let korisnickoIme = localStorage.getItem("korisnickoIme");

    this.galerija.push(this.slika);
    for(let i = 0; i < this.probna.length;i++){
      this.galerija.push(this.probna[i]);
    }

    const formData = new FormData();
    formData.append('naziv', this.naziv);
    formData.append("mesto", this.mesto);
    formData.append("datum", String(this.datum));
    for(let i = 0; i < this.galerija.length; i++){
      formData.append("galerija[]", this.galerija[i]);
    }
    formData.append("opis", this.opis);
    formData.append("dugacakOpis", this.dugacakOpis);
    formData.append("predlozio", korisnickoIme);

    this.predlogServis.predlozi(formData).subscribe(resp=>{
      if(resp["message"]){
        this.poruka = "Uspesno ste poslali predlog";
      }
    })

  }

  odjaviSe(){
    localStorage.clear();
  }

}
