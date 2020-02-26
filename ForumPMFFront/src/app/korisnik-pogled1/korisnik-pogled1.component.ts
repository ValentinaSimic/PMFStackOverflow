import { Component, OnInit } from '@angular/core';
import { LoginAuthService } from '../login-auth.service';

@Component({
  selector: 'app-korisnik-pogled1',
  templateUrl: './korisnik-pogled1.component.html',
  styleUrls: ['./korisnik-pogled1.component.css']
})
export class KorisnikPogled1Component implements OnInit {

  constructor(
    private authService: LoginAuthService
  ) { 
    this.authService.isLoggedIn();
  }

  ngOnInit() {
  }

}
