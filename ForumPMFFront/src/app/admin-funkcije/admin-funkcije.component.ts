import { Component, OnInit } from '@angular/core';
import { LoginAuthService } from '../login-auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-funkcije',
  templateUrl: './admin-funkcije.component.html',
  styleUrls: ['./admin-funkcije.component.css']
})
export class AdminFunkcijeComponent implements OnInit {

  public image: any= File;

  constructor(
    private authService: LoginAuthService,
    private userService: UserService
  ) { 
    this.authService.isLoggedIn();  
  }

  ngOnInit() {
  }


  onSelectFile(event){
    const file=event.target.files[0];
    this.image=file;
    console.log(file);
  }

//   dodajSliku(image){
//     this.userService.dodajSliku(image).subscribe((response)=>{ 
//     })
//   }

}
