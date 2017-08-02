import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import  { CancionesPage } from '../canciones/canciones';
import { PerfilesPage } from '../perfiles/perfiles';



@Component({
  selector: 'page-playlists',
  templateUrl: 'playlists.html',
})
export class PlaylistsPage {

  public userID: number;

  //Los datos que se envian de userID, se pueden obtener a traves de navparams
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.userID = this.navParams.get('userID');
    console.log(this.userID);

  }
  
  goToCanciones(playlistID){
    this.navCtrl.push(CancionesPage, {playlistID: playlistID})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlaylistsPage');
  }

}
