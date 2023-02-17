import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Radionica } from 'src/models/radionica';
import { RadionicaService } from '../radionica.service';

@Component({
  selector: 'app-admin-azurira-rad',
  templateUrl: './admin-azurira-rad.component.html',
  styleUrls: ['./admin-azurira-rad.component.css']
})
export class AdminAzuriraRadComponent implements OnInit {

  constructor(private radServis:RadionicaService, private router:Router) { }

  ngOnInit(): void {
    let id = localStorage.getItem("azuriranjeRad");
    this.radServis.dohvatiRadionicuId(id).subscribe((r:Radionica)=>{
      if(r){
        this.radionica = r;
        this.naziv = r.naziv;
        this.opis = r.opis;
        this.dugacakOpis = r.dugacakOpis;
        this.mesto = r.mesto;
        this.datum = r.datum;
        this.slika = r.glavnaSlika;
        this.datum = new Date(r.datum).toISOString().split('T')[0];
        this.staraSlika = r.glavnaSlika;
        this.id = r._id;
      }
    })
  }

  izaberiSliku(event){
    if(event.target.files.length>0){
      const file = event.target.files[0];
      this.slika = file;
    }
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

  azuriraj(){
    if(!this.naziv || !this.opis || !this.dugacakOpis || !this.datum || !this.mesto){
      this.poruka = "Morate uneti sve podatke";
    }

    const formData = new FormData();
    formData.append('naziv', this.naziv);
    formData.append('opis', this.opis);
    formData.append('dugacakOpis', this.dugacakOpis);
    formData.append('mesto', this.mesto);
    formData.append('slika', this.slika);
    formData.append('datum', this.datum);
    formData.append('id', this.id);
    formData.append("staraSlika", this.staraSlika);

    this.radServis.azurirajRadionicu(formData).subscribe(resp=>{
      if(resp["message"]=="Uspesno azurirana radionica"){
        this.poruka = "Uspesno azurirana radionica";
          localStorage.removeItem("azuriranjeRad");
          this.router.navigate(["/admin/radionice"]);
      }
    })
  }

  odjaviSe(){
    localStorage.clear();
  }

}
