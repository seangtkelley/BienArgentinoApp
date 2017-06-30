import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { QuienesSomosPage } from '../pages/quienes/quienes';
import { EducacionVialPage } from '../pages/educacionvial/educacionvial';
import { RecursosDidacticosPage } from '../pages/recursosdidacticos/recursosdidacticos';
import { EducacionAmbientalPage } from '../pages/educacionambiental/educacionambiental';
import { MediotecaPage } from '../pages/medioteca/medioteca';
import { LinksPage } from '../pages/links/links';
import { ContactoPage } from '../pages/contacto/contacto';
//import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Quiénes somos', component: QuienesSomosPage },
      { title: 'Educación vial', component: EducacionVialPage },
      { title: 'Recursos didácticos', component: RecursosDidacticosPage },
      { title: 'Educación ambiental', component: EducacionAmbientalPage },
      { title: 'Medioteca', component: MediotecaPage },
      { title: 'Links', component: LinksPage },
      { title: 'Contacto', component: ContactoPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
