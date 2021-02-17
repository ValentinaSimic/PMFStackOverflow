import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import { Router } from '@angular/router';
import { LoginAuthService } from '../login-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: any={};

  constructor(
    private userService: UserService,
    private router: Router,
    private authService: LoginAuthService
  )
   { 
    this.authService.isLoggedIn();
  }

  ngOnInit() {
  }
  
  //shared service?
  loginUser(user: any){
    this.userService.loginUser(user).subscribe((response)=>{
      if(response.token){
        localStorage.setItem('currentUser',JSON.stringify(response));
        if(response.user.role === 'ADMIN'){
          this.router.navigate(['/admin-funkcije']);
        }else{
          localStorage.setItem('student',response.user.role);
          localStorage.setItem('studentIme',response.user.ime);
          localStorage.setItem('studentPrezime',response.user.prezime);
          localStorage.setItem('studentBrojIndexa',response.user.brojIndexa);
          localStorage.setItem('studentSmer',response.user.smer);
          localStorage.setItem('studentUsername',response.user.username);
          this.router.navigate(['/korisnik-pogled']);
        }
      }
    })
  }

}
