import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KorisnikService } from '../korisnik.service';

@Component({
  selector: 'app-organizator',
  templateUrl: './organizator.component.html',
  styleUrls: ['./organizator.component.css']
})
export class OrganizatorComponent implements OnInit {

  constructor(private korisnikServis:KorisnikService, private router:Router) { }

  ngOnInit(): void {
  }

  staraLozinka:string;
  novaLozinka1:string;
  novaLozinka2:string;
  poruka:string;

  promeniLozinku(){
    if(!this.staraLozinka || !this.novaLozinka1 || !this.staraLozinka){
      this.poruka = "Nisu uneti svi podaci";
      return;
    }

    const pattern= /^(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,16}$/;
    const pattern2 = /^[a-zA-Z]/

    if(!pattern.test(this.novaLozinka1) || !pattern2.test(this.novaLozinka1)){
      this.poruka = "Lozinka nije u ispravnom formatu";
      return;
    }

    if(this.novaLozinka1 != this.novaLozinka2){
      this.poruka = "Lozinke se ne poklapaju";
      return;
    }
    let korisnickoIme = localStorage.getItem("korisnickoIme");

    this.korisnikServis.promeniLozinku(korisnickoIme, this.novaLozinka1, this.staraLozinka).subscribe(resp=>{
      if(resp["message"] == "Pogresna lozinka"){
        this.poruka = "Pogresna lozinka";
      }else if(resp["message"] == "Promenjena lozinka"){
        localStorage.clear();
        this.router.navigate([""]);
      }
    })
    
    
  }

  odjaviSe(){
    localStorage.clear();
  }

}
