import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-pitanje',
  templateUrl: './pitanje.component.html',
  styleUrls: ['./pitanje.component.css']
})
export class PitanjeComponent implements OnInit {

  private idPitanje;
  public pitanje;
  public postavioOdg;
  public textOdg;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.idPitanje= this.route.snapshot.paramMap.get("id");
    this.userService.find(this.idPitanje)
          .subscribe(response =>{
            this.pitanje=response;
          }),error =>{
            this.router.navigate(['/pitanja']);
          }
  }

  public dodajO(){
    const odgovor={
      "textOdg": this.textOdg,
      "postavioOdg": localStorage.getItem("studentUsername")
    }
    this.userService.dodajOdgovor(this.pitanje.id, odgovor)
              .subscribe(response=>{
                this.pitanje.odgovori.push(response);
              });
  }

}
