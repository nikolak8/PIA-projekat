import { Component, OnInit } from '@angular/core';
import { Slika } from 'src/models/slika';
import { PredlogService } from '../predlog.service';

@Component({
  selector: 'app-organizator-dodaje-radionicu',
  templateUrl: './organizator-dodaje-radionicu.component.html',
  styleUrls: ['./organizator-dodaje-radionicu.component.css']
})
export class OrganizatorDodajeRadionicuComponent implements OnInit {

  constructor(private predlogServis:PredlogService) { }

  ngOnInit(): void {
  }

  naziv:string;
  mesto:string;
  datum;
  slika;
  slikaSablon;
  //galerija:string[] = [];
  probna:string[] = [];
  opis:string;
  dugacakOpis:string;
  poruka:string;
  sablon;
  podaci;
  dodaoFajl = "nije";
  galerija;
  nijeMenjana = "nije";
  nijeMenjanaGal = "nije";
  gal:string[] = [];

  
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

  izaberiSablon(event){
    if(event.target.files.length > 0){
      this.dodaoFajl = "jeste";
      this.sablon = event.target.files[0];
      const fileReader = new FileReader();
      fileReader.readAsText(this.sablon, 'UTF-8');
      fileReader.onload = ()=>{
        this.podaci = JSON.parse(fileReader.result as string)
        this.naziv = this.podaci.naziv;
        this.mesto = this.podaci.mesto;
        this.slikaSablon = this.podaci.glavnaSlika;
        this.galerija = this.podaci.galerija;
        console.log(this.galerija[0]);
        this.opis = this.podaci.opis;
        this.dugacakOpis = this.podaci.dugacakOpis;
        this.datum = new Date(this.podaci.datum).toISOString().split('T')[0];
      }
    }
  }

  predlozi(){

    let korisnickoIme = localStorage.getItem("korisnickoIme");

    if(!this.slika){
      this.nijeMenjana = "jeste";
    }else{
      this.gal.push(this.slika);
    }

    if(this.probna.length == 0){
      this.nijeMenjanaGal = "jeste";
    }else{
      for(let i = 0; i < this.probna.length;i++){
        this.gal.push(this.probna[i]);
      }
    }

    const formData = new FormData();
    formData.append('naziv', this.naziv);
    formData.append("mesto", this.mesto);
    formData.append("datum", String(this.datum));
    for(let i = 0; i < this.gal.length; i++){
      formData.append("galerija[]", this.gal[i]);
    }
    formData.append("opis", this.opis);
    formData.append("dugacakOpis", this.dugacakOpis);
    formData.append("nijeMenjana", this.nijeMenjana);
    formData.append("nijeMenjanaGal", this.nijeMenjanaGal);
    formData.append("predlozio", korisnickoIme);
    formData.append("staraSlika", this.slikaSablon);
    formData.append("staraGal", JSON.stringify(this.galerija))

    if(this.dodaoFajl == "jeste"){
      this.predlogServis.predloziOrganizator(formData).subscribe(resp=>{
        if(resp["message"]){
          this.poruka = "Uspesno ste poslali predlog";
        }
      })
    } else{
      this.predlogServis.predlozi(formData).subscribe(resp=>{
        if(resp["message"]){
          this.poruka = "Uspesno ste poslali predlog";
        }
      })
    }

    

  }

  ukloni(slika){
    this.galerija = this.galerija.filter((item)=> item.slika !== slika);
  }

  odjaviSe(){
    localStorage.clear();
  }

}
