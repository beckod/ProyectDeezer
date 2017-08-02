import { Component, ViewChild } from '@angular/core'; //Se inyecta ViewChild
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { InicioPage } from '../pages/inicio/inicio';
import { PerfilesPage } from '../pages/perfiles/perfiles';
import { ContactoPage } from '../pages/contacto/contacto';
import { AcercaPage } from '../pages/acerca/acerca';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild('NAV') nav: Nav;
  public rootPage: any;
  // Creacion de un array (en typescript) de objetos con atributos, string, any(no sabemos q es) , string
  pages: Array<{ titulo: string, component: any, icon: string }>;
  
  constructor(platform: Platform) {

    this.rootPage = InicioPage;
    this.pages = [
      {titulo: 'inicio', component: InicioPage, icon: 'home'},
      {titulo: 'Perfiles Deezer', component: PerfilesPage, icon: 'person'},
      {titulo: 'Contacto', component: ContactoPage, icon: 'mail'},
      {titulo: 'Acerca de', component: AcercaPage, icon: 'information-circle'}
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //statusBar.styleDefault();
      // splashScreen.hide();
    });
  }

  //
  goToPage(page){
    this.nav.setRoot(page);
  }

}

