import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from 'src/models/korisnik';
import { KorisnikService } from '../korisnik.service';

@Component({
  selector: 'app-admin-azurira-kor',
  templateUrl: './admin-azurira-kor.component.html',
  styleUrls: ['./admin-azurira-kor.component.css']
})
export class AdminAzuriraKorComponent implements OnInit {

  constructor(private korisnikServis:KorisnikService, private router:Router) { }

  ngOnInit(): void {
    let korIme = localStorage.getItem("azuriranjeKor");
    this.korisnikServis.dohvatiKorisnika(korIme).subscribe((kor:Korisnik)=>{
      if(kor){
        this.ime = kor.ime;
        this.prezime = kor.prezime;
        this.email = kor.email;
        this.korisnickoIme = kor.korisnickoIme;
        this.telefon = kor.telefon;
        this.slika = kor.slika;
        this.id = kor._id;
        this.staraSlika = kor.slika;
      }
    })
  }

  ime:string;
  prezime:string;
  korisnickoIme:string;
  email:string;
  telefon:string;
  slika;
  korisnik:Korisnik;
  poruka:string;
  id:string;
  staraSlika;

  izaberiSliku(event){
    if(event.target.files.length>0){
      const file = event.target.files[0];
      this.slika = file;
    }
  }

  azuriraj(){
    if(!this.ime || !this.prezime || !this.korisnickoIme || !this.telefon || !this.email){
      this.poruka = "Morate uneti sve podatke!";
      return;
    }
    const formData = new FormData();
    formData.append('ime', this.ime);
    formData.append('prezime', this.prezime);
    formData.append('korisnickoIme', this.korisnickoIme);
    formData.append('telefon', this.telefon);
    formData.append('slika', this.slika);
    formData.append('email', this.email);
    formData.append('id', this.id);
    formData.append("staraSlika", this.staraSlika);

    this.korisnikServis.azurirajKorisnika(formData).subscribe(resp=>{
      if(resp["message"]=="Uspesno azuriran"){
        this.poruka = "Uspesno azuriran!";
        localStorage.removeItem("korisnickoIme");
        localStorage.setItem("korisnickoIme", this.korisnickoIme);
        localStorage.removeItem("azuriranjeKor");
        this.router.navigate(["/admin/korisnici"]);
      } else{
        this.poruka = "Doslo je do greske!"
      }
    })
        
  }

  odjaviSe(){
    localStorage.clear();
  }

}
