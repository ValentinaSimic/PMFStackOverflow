import { Component, OnInit } from '@angular/core';
import { LoginAuthService } from '../login-auth.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-meni',
  templateUrl: './admin-meni.component.html',
  styleUrls: ['./admin-meni.component.css']
})
export class AdminMeniComponent implements OnInit {

  public loginuser: any={};
  public users: any[];
  public user: any={};


  constructor(
    private authService: LoginAuthService,
    private userService: UserService,
    private router: Router
  ) {
    this.authService.isLoggedIn();
    this.loginuser=JSON.parse(localStorage.getItem("currentUser"));
   }

  ngOnInit() {
    this.userService.getAllUsers(this.loginuser.token).subscribe(users=>{
      this.users=users;
    })
  }

  deleteUser(user: any){
    this.userService.deleteUser(this.loginuser.token, user).subscribe((response)=>{
      if(response){
        console.log(response);
        this.router.navigate(['/adminMeni'])
      }
    })
  }

}
