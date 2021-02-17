import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginAuthService } from '../login-auth.service';

@Component({
  selector: 'app-pitanja-kategorija',
  templateUrl: './pitanja-kategorija.component.html',
  styleUrls: ['./pitanja-kategorija.component.css']
})
export class PitanjaKategorijaComponent implements OnInit {

  private kursId;
  public pitanja; 

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: LoginAuthService
  ) {
    this.authService.isLoggedIn();
  }

  ngOnInit() {
    this.kursId= this.route.snapshot.paramMap.get("kursId");
    this.userService.pretraziKurs(this.kursId)
          .subscribe(response =>{
            this.pitanja=response;
          }),error =>{
            this.router.navigate(['/pitanja']);
          }
  }

}
