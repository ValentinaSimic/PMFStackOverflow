import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-kategorije',
  templateUrl: './kategorije.component.html',
  styleUrls: ['./kategorije.component.css']
})
export class KategorijeComponent implements OnInit {

  public kursevi;
  public nazivKursa;
  

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.userService.sviKursevi().subscribe(response => {
      this.kursevi=response;
    })
  }

  

 

}
