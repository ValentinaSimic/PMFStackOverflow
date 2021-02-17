import { Component, OnInit } from '@angular/core';
import { LoginAuthService } from '../login-auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-korisnik-pogled',
  templateUrl: './korisnik-pogled.component.html',
  styleUrls: ['./korisnik-pogled.component.css']
})
export class KorisnikPogledComponent implements OnInit {

  constructor(
    private authService: LoginAuthService,
    private userService: UserService
  ) { 
    this.authService.isLoggedIn();
  }

  ngOnInit() { 
  }

}
