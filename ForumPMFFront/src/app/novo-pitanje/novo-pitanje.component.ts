import { Component, OnInit } from '@angular/core';
import { LoginAuthService } from '../login-auth.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-novo-pitanje',
  templateUrl: './novo-pitanje.component.html',
  styleUrls: ['./novo-pitanje.component.css']
})
export class NovoPitanjeComponent implements OnInit {

  public naslovPitanje;
  public textPitanje;
  public postavioPitanje;
  public kursevi;
  public kursId;

  constructor(
    private userService: UserService,
    private route: Router
  ) { }

  ngOnInit() {
    this.userService.sviKursevi().subscribe(response => {
      this.kursevi=response;
    })
  }

  public dodajPitanje(){
    const pitanje={
      'naslovPitanje':this.naslovPitanje,
      'textPitanje':this.textPitanje,
      'postavioPitanje': localStorage.getItem('studentUsername'),
      'kurs': this.kursId
    };

    this.userService.save( pitanje)
            .subscribe(response =>{
              console.log(response);
              this.route.navigate(['/pitanja'])
            })
  }


}
