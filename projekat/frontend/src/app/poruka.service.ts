import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PorukaService {

  constructor(private http:HttpClient) { }

  uri = 'http://localhost:4000';

  dohvatiPoruke(idRad, korisnickoIme){
    let data = {
      idRad:idRad,
      korisnickoIme:korisnickoIme
    }

    return this.http.post(`${this.uri}/poruke/dohvatiSvePoruke`, data);
  }

  dohvatiPorukeOrganizator(korisnickoIme, idRad){
    let data = {
      idRad:idRad,
      korisnickoIme:korisnickoIme
    }
    return this.http.post(`${this.uri}/poruke/dohvatiPorukeOrganizator`, data);
  }

  dohvatiPorukuOrganizator(korisnickoIme, idRad, korisnickoIme2){
    let data = {
      idRad:idRad,
      korisnickoime1:korisnickoIme2,
      korisnickoime2:korisnickoIme
    }

    return this.http.post(`${this.uri}/poruke/dohvatiPorukuOrg`, data);
  }

  posaljiPoruku(korisnickoIme, idRad, novaPoruka, korisnickoIme2){
    let data = {
      korisnickoIme:korisnickoIme,
      idRad:idRad,
      novaPoruka:novaPoruka,
      korisnickoIme2:korisnickoIme2
    }
    return this.http.post(`${this.uri}/poruke/posaljiPoruku`, data);
  }

  posaljiPorukuOrg(idRad, korisnickoime2, korisnickoime1, novaPor){
    let data = {
      idRad:idRad,
      korisnickoime1:korisnickoime1,
      korisnickoime2:korisnickoime2,
      novaPor:novaPor
    }

    return this.http.post(`${this.uri}/poruke/posaljiPorukuOrg`, data);
  }

  zapocniCet(korisnickoIme, idRad, novaPoruka, korisnickoIme2){
    let data = {
      korisnickoIme:korisnickoIme,
      idRad:idRad,
      novaPoruka:novaPoruka,
      korisnickoIme2:korisnickoIme2
    }
    return this.http.post(`${this.uri}/poruke/zapocniCet`, data);
  }
}
