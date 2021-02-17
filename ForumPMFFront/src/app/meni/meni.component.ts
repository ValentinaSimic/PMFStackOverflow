import { Component, OnInit } from '@angular/core';
import { LoginAuthService } from '../login-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meni',
  templateUrl: './meni.component.html',
  styleUrls: ['./meni.component.css']
})
export class MeniComponent implements OnInit {

  public title = 'app';
  public currentstatus: any;
  public uloga;
  public student;
  
constructor(
  private authService: LoginAuthService,
  private router: Router
){
  this.authService.isLoggedIn();
  this.currentstatus= this.authService.getStatus().subscribe(currentstatus =>{
  this.currentstatus=currentstatus;
  })
  if(localStorage.getItem("student")==="USER"){
    this.student=true;
  }
}

logout(){
  localStorage.removeItem("currentUser");
  localStorage.removeItem("student");
  localStorage.removeItem("studentIme");
  localStorage.removeItem("studentPrezime");
  localStorage.removeItem("studentBrojIndexa");
  localStorage.removeItem("studentSmer");
  localStorage.removeItem("studentUsername");
  this.router.navigate(['login']);
}

ngOnInit() {
  this.uloga=localStorage.getItem("uloga");
}

}
