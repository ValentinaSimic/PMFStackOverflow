import { Component, OnInit, Input} from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pitanja',
  templateUrl: './pitanja.component.html',
  styleUrls: ['./pitanja.component.css']
})
export class PitanjaComponent implements OnInit {

  public pitanja;
  @Input() public pitanje;



  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    console.log(this.pitanje);
    if(this.route.snapshot.paramMap.get("trazim")!=null){
      this.userService
          .pretraga(this.route.snapshot.paramMap.get("trazim"))
          .subscribe(response =>{
            this.pitanja=response;
            
          });
      
    }else{
      this.userService.findAll().subscribe(response => {
        this.pitanja=response;
      })
    }
   
  }

}
