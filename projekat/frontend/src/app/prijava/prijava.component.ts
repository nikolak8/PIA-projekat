import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from 'src/models/korisnik';
import { KorisnikService } from '../korisnik.service';

@Component({
  selector: 'app-prijava',
  templateUrl: './prijava.component.html',
  styleUrls: ['./prijava.component.css']
})
export class PrijavaComponent implements OnInit {

  constructor(private korisnikServis:KorisnikService, private router:Router) { }

  ngOnInit(): void {
  }

  korisnickoIme: string;
  lozinka: string;
  poruka:string;
  tip:number;

  prijava(){
    this.poruka='';
    this.korisnikServis.prijava(this.korisnickoIme, this.lozinka).subscribe((korisnik: Korisnik)=>{
      if(korisnik && korisnik.tip != 0){
        localStorage.setItem("korisnickoIme", this.korisnickoIme);
        localStorage.setItem("tip", JSON.stringify(korisnik.tip));
        if(korisnik.tip == 1){
          this.router.navigate(['/organizator']);
        }else if(korisnik.tip == 2){
          this.router.navigate(['/ucesnik']);
        }
      } else{
        this.poruka = "Korisnicko ime ili lozinka nisu ispravni!";
      }
    })
  }

}
