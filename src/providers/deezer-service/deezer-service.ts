import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DeezerServiceProvider {
  public deezerAPI: string;

  constructor(public http: Http) {
    // this.deezerAPI = "https://api.deezer.com/";
    this.deezerAPI = "/deezerAPI/"; //Se utiliza asi (en ionic.config.json para evitar el problema de acceso)
    // console.log('Hello DeezerServiceProvider Provider');
  }

  getUsers(){
    // Pagina que tiene unos json con ids de usuario de deezer
   return this.http.get('https://api.myjson.com/bins/w076v')
   .map(res => res.json())

   //Se comenta, ya que para tomar el servicio, el sistema usa el observable (lo que devuelve el http.get)
  //  .subscribe(users =>{
  //    console.log(users);

  //   //  Recorremos array de users y obtenemos el usuario en cada loop
  //    users.map(userID =>{
  //     this.getUserDetail(userID);
  //    });

  //  });
  }

  getUserDetail(userID){
   return this.http.get(this.deezerAPI + "user/" + userID)
    .map(res => res.json())
  //   .subscribe(data =>{
  //   console.log(data);
  //  });
  }

}
