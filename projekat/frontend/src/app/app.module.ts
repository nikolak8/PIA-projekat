import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs'
import {MatDividerModule} from '@angular/material/divider'
import {MatMenuModule} from '@angular/material/menu'
import {MatButtonModule} from '@angular/material/button';
import { PrijavaComponent } from './prijava/prijava.component';
import { RegistracijaComponent } from './registracija/registracija.component'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input';
import { AdminPrijavaComponent } from './admin-prijava/admin-prijava.component';
import { UcesnikComponent } from './ucesnik/ucesnik.component';
import { AdminComponent } from './admin/admin.component';
import { OrganizatorComponent } from './organizator/organizator.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UcesnikProfilComponent } from './ucesnik-profil/ucesnik-profil.component';
import { AdminPregledComponent } from './admin-pregled/admin-pregled.component';
import { AdminAzuriraKorComponent } from './admin-azurira-kor/admin-azurira-kor.component';
import { AdminDodajeKorComponent } from './admin-dodaje-kor/admin-dodaje-kor.component';
import { AdminZahteviComponent } from './admin-zahtevi/admin-zahtevi.component';
import { AdminRadionicePregledComponent } from './admin-radionice-pregled/admin-radionice-pregled.component';
import { AdminAzuriraRadComponent } from './admin-azurira-rad/admin-azurira-rad.component';
import { UcesnikPrisustvovaoComponent } from './ucesnik-prisustvovao/ucesnik-prisustvovao.component';
import { UcesnikRadioniceComponent } from './ucesnik-radionice/ucesnik-radionice.component';
import { UcesnikSveRadComponent } from './ucesnik-sve-rad/ucesnik-sve-rad.component';
import { RadionicaPrikazComponent } from './radionica-prikaz/radionica-prikaz.component';
import { UcesnikDodajeRadComponent } from './ucesnik-dodaje-rad/ucesnik-dodaje-rad.component';
import { AdminDodajeRadComponent } from './admin-dodaje-rad/admin-dodaje-rad.component';
import { AdminPredloziRadComponent } from './admin-predlozi-rad/admin-predlozi-rad.component';
import { UcesnikMojeAkcijeComponent } from './ucesnik-moje-akcije/ucesnik-moje-akcije.component';
import { UcesnikSvePorukeComponent } from './ucesnik-sve-poruke/ucesnik-sve-poruke.component';
import { UcesnikCetComponent } from './ucesnik-cet/ucesnik-cet.component';
import { RadionicaStatistikaComponent } from './radionica-statistika/radionica-statistika.component';
import { OrganizatorProfilComponent } from './organizator-profil/organizator-profil.component';
import { OrganizatorDetaljiComponent } from './organizator-detalji/organizator-detalji.component';
import { OrganizatorRadioniceComponent } from './organizator-radionice/organizator-radionice.component';
import { OrganizatorPrijaveRadionicaComponent } from './organizator-prijave-radionica/organizator-prijave-radionica.component';
import { OrganizatorRadioniceDetaljiComponent } from './organizator-radionice-detalji/organizator-radionice-detalji.component';
import { OrganizatorDodajeRadionicuComponent } from './organizator-dodaje-radionicu/organizator-dodaje-radionicu.component';
import { TopPetComponent } from './top-pet/top-pet.component';

@NgModule({
  declarations: [
    AppComponent,
    PocetnaComponent,
    PrijavaComponent,
    RegistracijaComponent,
    AdminPrijavaComponent,
    UcesnikComponent,
    AdminComponent,
    OrganizatorComponent,
    UcesnikProfilComponent,
    AdminPregledComponent,
    AdminAzuriraKorComponent,
    AdminDodajeKorComponent,
    AdminZahteviComponent,
    AdminRadionicePregledComponent,
    AdminAzuriraRadComponent,
    UcesnikPrisustvovaoComponent,
    UcesnikRadioniceComponent,
    UcesnikSveRadComponent,
    RadionicaPrikazComponent,
    UcesnikDodajeRadComponent,
    AdminDodajeRadComponent,
    AdminPredloziRadComponent,
    UcesnikMojeAkcijeComponent,
    UcesnikSvePorukeComponent,
    UcesnikCetComponent,
    RadionicaStatistikaComponent,
    OrganizatorProfilComponent,
    OrganizatorDetaljiComponent,
    OrganizatorRadioniceComponent,
    OrganizatorPrijaveRadionicaComponent,
    OrganizatorRadioniceDetaljiComponent,
    OrganizatorDodajeRadionicuComponent,
    TopPetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatTabsModule,
    MatDividerModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
