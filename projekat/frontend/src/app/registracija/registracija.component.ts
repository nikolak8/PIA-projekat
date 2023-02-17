import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from 'src/models/korisnik';
import { KorisnikService } from '../korisnik.service';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {

  constructor(private router:Router, private korisnikServis:KorisnikService) { }

  ngOnInit(): void {
  }

  ime:string = '';
  prezime:string = '';
  korisnickoIme:string = '';
  lozinka:string = '';
  lozinka2:string = '';
  tip:number;
  slika;
  telefon:string = "";
  email:string = "";
  nazivOrganizacije:string = "";
  drzavaOrganizacije:string = "";
  gradOrganizacije:string = "";
  postanskiBroj:string = "";
  ulicaOrganizacije:string = "";
  brojUlice:string = "";
  maticniBrojOrg:string = "";
  poruka:string = "";

  izaberiSliku(event){
    if(event.target.files.length>0){
      const file = event.target.files[0];
      this.slika = file;
    }
  }

  registracija(){
    if(!this.ime || !this.prezime || !this.korisnickoIme || !this.lozinka || !this.lozinka2 || !this.tip || !this.telefon || !this.email){
      this.poruka = "Morate uneti sve podatke!";
      return;
    }

    if(this.lozinka != this.lozinka2){
      this.poruka = "Lozinke se ne poklapaju!";
      return;
    }

    const pattern= /^(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,16}$/;
    const pattern2 = /^[a-zA-Z]/

    if(!pattern.test(this.lozinka) || !pattern2.test(this.lozinka)){
      this.poruka = "Lozinka nije u ispravnom formatu";
      return;
    }

    const formData = new FormData();
    formData.append('ime', this.ime);
    formData.append('prezime', this.prezime);
    formData.append('korisnickoIme', this.korisnickoIme);
    formData.append('lozinka', this.lozinka);
    formData.append('telefon', this.telefon);
    formData.append('slika', this.slika);
    formData.append('email', this.email);
    formData.append('tip', String(this.tip));
    formData.append('nazivOrganizacije', this.nazivOrganizacije);
    formData.append('gradOrganizacije', this.gradOrganizacije);
    formData.append('drzavaOrganizacije', this.drzavaOrganizacije);
    formData.append('postanskiBroj', this.postanskiBroj);
    formData.append('ulicaOrganizacije', this.ulicaOrganizacije);
    formData.append('brojUlice', this.brojUlice);
    formData.append('maticniBrojOrg', this.maticniBrojOrg);

    this.korisnikServis.registracija(formData).subscribe(resp=>{
      if(resp["message"] == "Email vec postoji!"){
        this.poruka = "Email vec postoji!";
        return;
      } else if(resp["message"] == "Korisnicko ime vec postoji!"){
        this.poruka= "Korisnicko ime vec postoji!";
        return;
      } else if(resp["message"] == "ok"){
        this.poruka = "Uspesno poslat zahtev za registraciju";
      }
    })  
}
}
