import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from 'src/models/korisnik';
import { KorisnikService } from '../korisnik.service';

@Component({
  selector: 'app-admin-prijava',
  templateUrl: './admin-prijava.component.html',
  styleUrls: ['./admin-prijava.component.css']
})
export class AdminPrijavaComponent implements OnInit {

  constructor(private korisnikServis:KorisnikService, private router:Router) { }

  ngOnInit(): void {
  }

  korisnickoIme: string;
  lozinka: string;
  poruka:string;

  prijavaAdmin(){
    this.poruka='';
    this.korisnikServis.prijava(this.korisnickoIme, this.lozinka).subscribe((admin: Korisnik)=>{
      if(admin && admin.tip == 0){
        localStorage.setItem("korisnickoIme", this.korisnickoIme);
        localStorage.setItem("tip", JSON.stringify(admin.tip));
        this.router.navigate(['/admin']);
      }
      else {
        this.poruka = "Korisnicko ime ili lozinka nisu ispravni!";
      }
    });
  }
  }

