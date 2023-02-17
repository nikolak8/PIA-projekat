import { Component, OnInit } from '@angular/core';
import { RadionicaService } from '../radionica.service';

@Component({
  selector: 'app-admin-dodaje-rad',
  templateUrl: './admin-dodaje-rad.component.html',
  styleUrls: ['./admin-dodaje-rad.component.css']
})
export class AdminDodajeRadComponent implements OnInit {

  constructor(private radServis:RadionicaService) { }

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

    dodajRadionicu(){

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
  
      this.radServis.dodajRadionicu(formData).subscribe(resp=>{
        if(resp["message"]){
          this.poruka = "Uspesno ste dodali radionicu";
        }
      })
  
    }

    odjaviSe(){
      localStorage.clear();
    }
  }

