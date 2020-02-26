import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private uri='http://'+ window.location.hostname + ':8082';

  constructor(private http: HttpClient) {
    this.http=http;  
   }

   saveUser(user:any ): Observable<any>{
    const headers= new HttpHeaders({"Access-Control-Allow-Origin": "*"});
    return this.http.post("http://localhost:8082/registration", user, {headers: headers});
   }

   loginUser(user:any ): Observable<any>{
    const headers= new HttpHeaders({"Access-Control-Allow-Origin": "*"});
    return this.http.post("http://localhost:8082/login", user, {headers: headers});
   }

   getAllUsers(token:any ): Observable<any>{
    const headers= new HttpHeaders({"Authorization": "Bearer " + token});
    return this.http.get("http://localhost:8082/users", {headers: headers});
   }

   deleteUser( token:any, user:any):  Observable<any>{
    //const headers= new HttpHeaders({"Access-Control-Allow-Origin": "*"});
    const headers= new HttpHeaders({"Authorization": "Bearer " + token});
    return this.http.post("http://localhost:8082/deleteUser",user, {headers: headers});
   }

   public findAll(){
    return this.http.get(this.uri + '/pitanja/');
  }

  public pretraga(pretragaPitanje){
    return this.http.get(this.uri + '/pitanje/pretraga/'+ pretragaPitanje);
  }

  public find(idPitanje){
    return this.http.get(this.uri + '/pitanje/'+ idPitanje);
  }
  
  public dodajOdgovor(idPitanje, odgovor){
    return this.http.post(this.uri + '/pitanja/' + idPitanje + '/dodajOdgovor',odgovor);
  }

  public save(pitanje){
    return this.http.post(this.uri+'/savePitanje',pitanje);
 }

  public sviKursevi(){
    return this.http.get(this.uri+'/kursevi');
  
  }

  public pretraziKurs(kursId){
    return this.http.get(this.uri+"/pitanjaZaKurs/" +kursId);
  }

  public dodajSliku(slika){
    return this.http.post(this.uri+ "/photos/add",slika);
  }

  




   

}
