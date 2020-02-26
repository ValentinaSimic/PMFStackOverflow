import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminMeniComponent } from './admin-meni/admin-meni.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

import {FormsModule } from '@angular/forms';
import {UserService } from './user.service';
import {HttpClientModule} from '@angular/common/http';
import {AuthGuard} from './auth.guard';
import {LoginAuthService } from './login-auth.service';
import { OnamaComponent } from './onama/onama.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { AdminFunkcijeComponent } from './admin-funkcije/admin-funkcije.component';
import { ZaglavljeComponent } from './zaglavlje/zaglavlje.component';
import { MeniComponent } from './meni/meni.component';
import { KorisnikPogledComponent } from './korisnik-pogled/korisnik-pogled.component';
import { PitanjeComponent } from './pitanje/pitanje.component';
import { PretragaComponent } from './pretraga/pretraga.component';
import { KategorijeComponent } from './kategorije/kategorije.component';
import { StranaComponent } from './strana/strana.component';
import { KorisnikPogled1Component } from './korisnik-pogled1/korisnik-pogled1.component';
import { PitanjaComponent } from './pitanja/pitanja.component';
import { NovoPitanjeComponent } from './novo-pitanje/novo-pitanje.component';
import { PitanjaKategorijaComponent } from './pitanja-kategorija/pitanja-kategorija.component';
import { ProfilComponent } from './profil/profil.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminMeniComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    OnamaComponent,
    KontaktComponent,
    AdminFunkcijeComponent,
    ZaglavljeComponent,
    MeniComponent,
    KorisnikPogledComponent,
    PitanjeComponent,
    PretragaComponent,
    KategorijeComponent,
    StranaComponent,
    KorisnikPogled1Component,
    PitanjaComponent,
    NovoPitanjeComponent,
    PitanjaKategorijaComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    UserService,
    AuthGuard,
    LoginAuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
