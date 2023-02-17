import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAzuriraKorComponent } from './admin-azurira-kor/admin-azurira-kor.component';
import { AdminAzuriraRadComponent } from './admin-azurira-rad/admin-azurira-rad.component';
import { AdminDodajeKorComponent } from './admin-dodaje-kor/admin-dodaje-kor.component';
import { AdminDodajeRadComponent } from './admin-dodaje-rad/admin-dodaje-rad.component';
import { AdminPredloziRadComponent } from './admin-predlozi-rad/admin-predlozi-rad.component';
import { AdminPregledComponent } from './admin-pregled/admin-pregled.component';
import { AdminPrijavaComponent } from './admin-prijava/admin-prijava.component';
import { AdminRadionicePregledComponent } from './admin-radionice-pregled/admin-radionice-pregled.component';
import { AdminZahteviComponent } from './admin-zahtevi/admin-zahtevi.component';
import { AdminGuard } from './admin.guard';
import { AdminComponent } from './admin/admin.component';
import { OrganizatorDetaljiComponent } from './organizator-detalji/organizator-detalji.component';
import { OrganizatorDodajeRadionicuComponent } from './organizator-dodaje-radionicu/organizator-dodaje-radionicu.component';
import { OrganizatorPrijaveRadionicaComponent } from './organizator-prijave-radionica/organizator-prijave-radionica.component';
import { OrganizatorProfilComponent } from './organizator-profil/organizator-profil.component';
import { OrganizatorRadioniceDetaljiComponent } from './organizator-radionice-detalji/organizator-radionice-detalji.component';
import { OrganizatorRadioniceComponent } from './organizator-radionice/organizator-radionice.component';
import { OrganizatorGuard } from './organizator.guard';
import { OrganizatorComponent } from './organizator/organizator.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { PrijavaComponent } from './prijava/prijava.component';
import { RadionicaPrikazComponent } from './radionica-prikaz/radionica-prikaz.component';
import { RadionicaStatistikaComponent } from './radionica-statistika/radionica-statistika.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { TopPetComponent } from './top-pet/top-pet.component';
import { UcesnikCetComponent } from './ucesnik-cet/ucesnik-cet.component';
import { UcesnikDodajeRadComponent } from './ucesnik-dodaje-rad/ucesnik-dodaje-rad.component';
import { UcesnikMojeAkcijeComponent } from './ucesnik-moje-akcije/ucesnik-moje-akcije.component';
import { UcesnikPrisustvovaoComponent } from './ucesnik-prisustvovao/ucesnik-prisustvovao.component';
import { UcesnikProfilComponent } from './ucesnik-profil/ucesnik-profil.component';
import { UcesnikRadioniceComponent } from './ucesnik-radionice/ucesnik-radionice.component';
import { UcesnikSvePorukeComponent } from './ucesnik-sve-poruke/ucesnik-sve-poruke.component';
import { UcesnikSveRadComponent } from './ucesnik-sve-rad/ucesnik-sve-rad.component';
import { UcesnikGuard } from './ucesnik.guard';
import { UcesnikComponent } from './ucesnik/ucesnik.component';


const routes: Routes = [
  {path:'', component:PocetnaComponent},
  {path:'prijava', component:PrijavaComponent},
  {path:'registracija', component:RegistracijaComponent},
  {path:'adminPrijava', component:AdminPrijavaComponent},
  {path:'ucesnik', component:UcesnikComponent, canActivate:[UcesnikGuard]},
  {path:'admin', component:AdminComponent, canActivate:[AdminGuard]},
  {path:'organizator', component:OrganizatorComponent, canActivate:[OrganizatorGuard]},
  {path:'ucesnik/mojProfil', component:UcesnikProfilComponent, canActivate:[UcesnikGuard]},
  {path:'admin/korisnici', component:AdminPregledComponent, canActivate:[AdminGuard]},
  {path:'admin/korisnici/azuriraj', component:AdminAzuriraKorComponent, canActivate:[AdminGuard]},
  {path:'admin/dodajKorisnika', component:AdminDodajeKorComponent, canActivate:[AdminGuard]},
  {path:'admin/zahtevi', component:AdminZahteviComponent, canActivate:[AdminGuard]},
  {path:'admin/radionice', component:AdminRadionicePregledComponent, canActivate:[AdminGuard]},
  {path:'admin/radionice/azuriraj', component:AdminAzuriraRadComponent, canActivate:[AdminGuard]},
  {path:'ucesnik/mojeRadionice', component:UcesnikPrisustvovaoComponent, canActivate:[UcesnikGuard]},
  {path:'ucesnik/radionice', component:UcesnikRadioniceComponent, canActivate:[UcesnikGuard]},
  {path:'ucesnik/sveRadionice', component:UcesnikSveRadComponent, canActivate:[UcesnikGuard]},
  {path:'ucesnik/sveRadionice/detalji', component:RadionicaPrikazComponent, canActivate:[UcesnikGuard]},
  {path:'ucesnik/postaniOrganizator', component:UcesnikDodajeRadComponent, canActivate:[UcesnikGuard]},
  {path:'admin/dodajRadionicu', component:AdminDodajeRadComponent, canActivate:[AdminGuard]},
  {path:'admin/predlozi', component:AdminPredloziRadComponent, canActivate:[AdminGuard]},
  {path:'ucesnik/akcije', component:UcesnikMojeAkcijeComponent, canActivate:[UcesnikGuard]},
  {path:'ucesnik/svePoruke', component:UcesnikSvePorukeComponent, canActivate:[UcesnikGuard]},
  {path:'ucesnik/cet', component:UcesnikCetComponent, canActivate:[UcesnikGuard]},
  {path:'ucesnik/sveRadionice/statistika', component:RadionicaStatistikaComponent, canActivate:[UcesnikGuard]},
  {path:'organizator/profil', component:OrganizatorProfilComponent, canActivate:[OrganizatorGuard]},
  {path:'organizator/profil/radionica', component:OrganizatorDetaljiComponent, canActivate:[OrganizatorGuard]},
  {path:'organizator/sveRadionice', component:OrganizatorRadioniceComponent, canActivate:[OrganizatorGuard]},
  {path:'organizator/sveRadionice/prijave', component:OrganizatorPrijaveRadionicaComponent, canActivate:[OrganizatorGuard]},
  {path:'organizator/sveRadionice/detalji', component:OrganizatorRadioniceDetaljiComponent, canActivate:[OrganizatorGuard]},
  {path:'organizator/dodajRadionicu', component:OrganizatorDodajeRadionicuComponent, canActivate:[OrganizatorGuard]},
  {path:'top5', component:TopPetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
