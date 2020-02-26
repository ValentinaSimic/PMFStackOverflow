import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AdminMeniComponent } from './admin-meni/admin-meni.component';
import { AuthGuard } from './auth.guard';
import { OnamaComponent } from './onama/onama.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { AdminFunkcijeComponent } from './admin-funkcije/admin-funkcije.component';
import { KorisnikPogledComponent } from './korisnik-pogled/korisnik-pogled.component';
import { PitanjaComponent } from './pitanja/pitanja.component';
import { PitanjeComponent } from './pitanje/pitanje.component';
import { KorisnikPogled1Component } from './korisnik-pogled1/korisnik-pogled1.component';
import { NovoPitanjeComponent } from './novo-pitanje/novo-pitanje.component';
import { PitanjaKategorijaComponent } from './pitanja-kategorija/pitanja-kategorija.component';
import { ProfilComponent } from './profil/profil.component';


const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo : 'home'
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'signup',
    component: SignupComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'admin-meni',
    component: AdminMeniComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'korisnik-pogled',
    component: KorisnikPogledComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'onama',
    component: OnamaComponent
  },
  {
    path:'kontakt',
    component: KontaktComponent
  },{
    path:'admin-funkcije',
    component: AdminFunkcijeComponent
  },
  {
    path: 'pitanje/pretraga/:trazim',
    component: KorisnikPogledComponent
    },
  {
      path: 'pitanje/:id',
      component: KorisnikPogled1Component
  },
  {
      path: 'pitanja',
      component: KorisnikPogledComponent
  },
  {
    path: 'novoPitanje',
    component: NovoPitanjeComponent
  },
  {
    path: 'adminMeni',
    component: AdminMeniComponent
  },
  {
    path: 'pitanjaZaKurs/:kursId',
    component: PitanjaKategorijaComponent
  },
  {
    path: 'profil',
    component: ProfilComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
