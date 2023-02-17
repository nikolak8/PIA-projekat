import { Component, OnInit } from '@angular/core';
import { Radionica } from 'src/models/radionica';
import { RadionicaService } from '../radionica.service';
import {Slika} from 'src/models/slika';

@Component({
  selector: 'app-organizator-radionice-detalji',
  templateUrl: './organizator-radionice-detalji.component.html',
  styleUrls: ['./organizator-radionice-detalji.component.css']
})
export class OrganizatorRadioniceDetaljiComponent implements OnInit {

  constructor(private radionicaServis:RadionicaService) { }

  ngOnInit(): void {
    let id = localStorage.getItem("radionicaAzuriranje");
    this.radionicaServis.dohvatiRadionicuId(id).subscribe((r:Radionica)=>{
      if(r){
        this.radionica = r;
        this.naziv = r.naziv;
        this.opis = r.opis;
        this.dugacakOpis = r.dugacakOpis;
        this.mesto = r.mesto;
        this.datum = new Date(r.datum).toISOString().split('T')[0];
        this.staraSlika = r.glavnaSlika;
        this.galerija = r.galerija;
      }
    })
  }

  radionica:Radionica;
  naziv:string;
  opis:string;
  dugacakOpis:string;
  mesto:string;
  datum;
  slika;
  poruka:string;
  staraSlika;
  id;
  galerija:Slika[] = [];
  probna:string[] = [];
  gal:string[] = [];
  nijeMenjana = "nije";
  nijeMenjanaGal = "nije";
 

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

  azuriraj(){
    let idRad = localStorage.getItem("radionicaAzuriranje");

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
    
    //for(let i = 0; i < this.galerija.length; i++){
     // this.gal.push(this.galerija[i].slika);
    //}

    console.log(this.gal);

    const formData = new FormData();
    formData.append('naziv', this.naziv);
    formData.append("mesto", this.mesto);
    formData.append("datum", String(this.datum));
    for(let i = 0; i < this.gal.length; i++){
      formData.append("galerija[]", this.gal[i]);
    }
    formData.append("opis", this.opis);
    formData.append("dugacakOpis", this.dugacakOpis);
    formData.append("idRad", idRad);
    formData.append("nijeMenjana", this.nijeMenjana);
    formData.append("nijeMenjanaGal", this.nijeMenjanaGal);
    formData.append("staraSlika", this.staraSlika);
    formData.append("staraGal", JSON.stringify(this.galerija))
    
    

    this.radionicaServis.azurirajRadionicuOrganizator(formData).subscribe(resp=>{
      if(resp){
        this.poruka = "Uspesno ste azurirali radionicu!";
      }
    })

  }

  ukloni(slika){
    let idRad = localStorage.getItem("radionicaAzuriranje");
    this.radionicaServis.ukloniIzGalerije(slika, idRad).subscribe(res=>{
      if(res){
        window.location.reload();
      }
    })
  }

  odjaviSe(){
    localStorage.clear();
  }

}
