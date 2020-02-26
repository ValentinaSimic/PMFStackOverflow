import { Component, OnInit } from '@angular/core';
import { LoginAuthService } from '../login-auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  private ime;
  private prezime;
  private brojIndexa;
  private smer;
  private username;
  selectedFile:File=null;

  constructor(
    private authService: LoginAuthService,
    private userService: UserService
  ) {
    this.authService.isLoggedIn();
    }

  ngOnInit() {
    this.ime= localStorage.getItem("studentIme")
    this.prezime= localStorage.getItem("studentPrezime")
    this.brojIndexa= localStorage.getItem("studentBrojIndexa")
    this.smer= localStorage.getItem("studentSmer")
    this.username= localStorage.getItem("studentUsername")

  }

  public onFileSelected(event){
    console.log(event);
    this.selectedFile=<File> event.target.files[0];
  }

  onUpload(){
    const uploadData=new FormData();
    uploadData.append("image",this.selectedFile,this.selectedFile.name);
    this.userService.dodajSliku(uploadData).subscribe(
      res=>{ console.log(res);
      });
  }


}
