import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class RadionicaService {

  constructor(private http:HttpClient) { }

  uri = 'http://localhost:4000';

  dohvatiSveRadionice(){
    
    return this.http.get(`${this.uri}/radionice/dohvatiSveRadionice`);
  }

  dohvatiRadionice(naziv, mesto){
    let data = {
      naziv:naziv,
      mesto:mesto
    }; 
    return this.http.post(`${this.uri}/radionice/dohvatiRadionice`, data);
  }

  obrisi(id){
    let data = {
      id:id
    }

    return this.http.post(`${this.uri}/radionice/obrisiRadionicu`, data);
  }

  sacuvajSablon(id){

    let data = {
      idRad:id
    }
    
    return this.http.post(`${this.uri}/radionice/sacuvajSablon`, data);
    
  }

  preuzmi(){
    return this.http.get(`${this.uri}/radionice/preuzmi`);
  }

  otkaziPrijavu(id, korisnickoIme){
    let data = {
      id:id,
      korisnickoIme:korisnickoIme
    }
    return this.http.post(`${this.uri}/radionice/otkaziPrijavu`, data);
  }

  dohvatiRadionicuId(id){
    let data = {
      id:id
    }
    return this.http.post(`${this.uri}/radionice/dohvatiRadionicuId`, data);
  }

  prijaviMe(korisnickoIme, id){
    let data = {
      korisnickoIme:korisnickoIme,
      id:id
    }

    return this.http.post(`${this.uri}/radionice/prijaviMe`, data);
  }

  azurirajRadionicu(formData){
    return this.http.post(`${this.uri}/radionice/azurirajRadionicu`, formData);
  }

  azurirajRadionicuOrganizator(formData){
    return this.http.post(`${this.uri}/radionice/azurirajRadionicuOrganizator`, formData);
  }

  dodajRadionicu(formData){
    return this.http.post(`${this.uri}/radionice/dodajRadionicu`, formData);
  }

  dohvatiAktuelneRadionice(){
    return this.http.get(`${this.uri}/radionice/dohvatiAktuelne`);
  }

  otkaziRadionicu(id){
    let data = {
      idRad:id
    }
    return this.http.post(`${this.uri}/radionice/otkaziRadionicu`,data);
  }

  prihvatiPrijavu(idRad, ime){
    let data = {
      idRad:idRad,
       ime:ime
    }

    return this.http.post(`${this.uri}/radionice/prihvatiPrijavu`, data);
  }

  odbijPrijavu(idRad, ime){
    let data = {
      idRad:idRad,
      ime:ime
    }
    return this.http.post(`${this.uri}/radionice/odbijPrijavu`,data);
  }

  prihvatiPredlog(formData){
    return this.http.post(`${this.uri}/radionice/prihvatiPredlog`, formData);
  }

  azurirajKomentar(formData){
    return this.http.post(`${this.uri}/radionice/azurirajKomentar`, formData);
  }

  dodajKomentar(idRad, korisnickoIme, novKomentar){
    let data = {
      idRad:idRad,
      korisnickoIme:korisnickoIme,
      novKomentar:novKomentar
    }
    return this.http.post(`${this.uri}/radionice/dodajKomentar`, data);
  }

  obrisiKomentar(formData){
    return this.http.post(`${this.uri}/radionice/obrisiKomentar`, formData);
  }

  povuciSvidjanje(data){
    return this.http.post(`${this.uri}/radionice/povuciSvidjanje`, data);
  }

  proveriLajk(korisnickoIme, idRad, nazivRad, datumRad){
    let data = {
      korisnickoIme:korisnickoIme,
      idRad:idRad,
      nazivRad:nazivRad,
      datumRad:datumRad
    }
    return this.http.post(`${this.uri}/radionice/proveriLajk`, data);
  }

  dohvatiRadioniceOrganizator(korisnickoIme){
    let data = {
      korisnickoIme:korisnickoIme
    }
    return this.http.post(`${this.uri}/radionice/dohvatiRadioniceOrganizator`, data);
  }

  lajkuj(korisnickoIme, idRad){
    let data = {
      korisnickoIme:korisnickoIme,
      idRad:idRad
    }
    return this.http.post(`${this.uri}/radionice/lajkuj`, data);
  }

  ukloniIzGalerije(slika, idRad){
    let data = {
      slika:slika,
      idRad:idRad
    }
    return this.http.post(`${this.uri}/radionice/ukloniIzGalerije`,data);
  }
}
