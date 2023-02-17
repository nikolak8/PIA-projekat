import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PredlogService {

  constructor(private http:HttpClient) { }

  uri = 'http://localhost:4000';

  predlozi(formData){
    return this.http.post(`${this.uri}/predlozi/dodaj`, formData);
  }

  predloziOrganizator(formData){
    return this.http.post(`${this.uri}/predlozi/dodajOrganizator`, formData);
  }

  dohvatiAktuelne(){
    return this.http.get(`${this.uri}/predlozi/dohvatiAktuelne`);
  }

  obrisiPredlog(id){
    let formData = {
      id:id
    }
    return this.http.post(`${this.uri}/predlozi/obrisi`, formData);
  }
}
