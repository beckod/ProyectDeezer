import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlaylistsPage } from '../playlists/playlists';

import {DeezerServiceProvider} from '../../providers/deezer-service/deezer-service';

@IonicPage()
@Component({
  selector: 'page-perfiles',
  templateUrl: 'perfiles.html',
  providers: [ DeezerServiceProvider ]

})
export class PerfilesPage {

  public users: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public ds: DeezerServiceProvider
  ) {

    this.users = [];

  }


  goToPlaylist(userID){
    this.navCtrl.push(PlaylistsPage, { userID: userID });//Para ir a la pagina, utilizando el controlador
  }

  ionViewDidLoad() {
    
    this.ds.getUsers().subscribe(usersIDs=>{ //Peticion de todos los IDs de los usuarios
      usersIDs.map(userID =>{ //mapeamos y por cada ID se pide detalle de usuario, el cual se agrega a array
        this.ds.getUserDetail(userID).subscribe(user =>{
          this.users.push(user);//Se guarda en array los usuarios
          // console.log(this.users);
        })
      });
    });
  }

}
