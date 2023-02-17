import { normalizePassiveListenerOptions } from '@angular/cdk/platform';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {

  constructor(private http:HttpClient) { }

  uri = 'http://localhost:4000';

  prijava(korisnickoIme:string, lozinka:string){
    let data = {
      korisnickoIme: korisnickoIme,
      lozinka: lozinka
    }
    return this.http.post(`${this.uri}/korisnik/prijava`, data);
  }

  registracija(formData){
    
    return this.http.post(`${this.uri}/korisnik/registracija`, formData);
  }

  dohvatiKorisnika(korIme){
    let data = {
      korisnickoIme: korIme
    }

    return this.http.post(`${this.uri}/korisnik/dohvatiKorisnika`, data);
  }

  azurirajKorisnika(formData){
    return this.http.post(`${this.uri}/korisnik/azurirajKorisnika`, formData);
  }

  unaprediKorisnika(korisnickoIme){
    let data = {
      korisnickoIme:korisnickoIme
    }
    return this.http.post(`${this.uri}/korisnik/unapredi`, data);
  }

  posaljiMejl(prijavljeni, naziv){
    let data = {
      prijavljeni:prijavljeni,
      naziv:naziv
    }
    return this.http.post(`${this.uri}/korisnik/posaljiMejl`, data);
  }

  dohvatiSveKorisnike(){
    
    return this.http.get(`${this.uri}/korisnik/dohvatiSveKorisnike`);
  }

  dohvatiAktivneKorisnike(){
    
    return this.http.get(`${this.uri}/korisnik/dohvatiAktivneKorisnike`);
  }

  obrisiKorisnika(korisnickoIme){
    let data = {
      korisnickoIme:korisnickoIme
    }

    return this.http.post(`${this.uri}/korisnik/obrisiKorisnika`, data);
  }

  dodajKorisnika(formData){
    
    return this.http.post(`${this.uri}/korisnik/dodajKorisnika`, formData);
  }

  dohvatiZahteve(){
    
    return this.http.get(`${this.uri}/korisnik/dohvatiZahteve`);
  }

  prihvatiZahtevKor(korisnickoIme){
    let data = {
      korisnickoIme:korisnickoIme
    }

    return this.http.post(`${this.uri}/korisnik/prihvatiZahtev`, data);
  }

  odbijZahtevKor(korisnickoIme){
    let data = {
      korisnickoIme:korisnickoIme
    }

    return this.http.post(`${this.uri}/korisnik/odbijZahtev`, data);
  }

  promeniLozinku(korisnickoIme, novaLozinka, staraLozinka){
    let data = {
      korisnickoIme:korisnickoIme,
      novaLozinka:novaLozinka,
      staraLozinka:staraLozinka
    }

    return this.http.post(`${this.uri}/korisnik/promeniLozinku`, data);
  }

}
