import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { QuienesSomosPage } from '../pages/quienes/quienes';
import { EducacionVialPage } from '../pages/educacionvial/educacionvial';
import { RecursosDidacticosPage } from '../pages/recursosdidacticos/recursosdidacticos';
import { EducacionAmbientalPage } from '../pages/educacionambiental/educacionambiental';
import { MediotecaPage } from '../pages/medioteca/medioteca';
import { LinksPage } from '../pages/links/links';
import { ContactoPage } from '../pages/contacto/contacto';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    QuienesSomosPage,
    EducacionVialPage,
    RecursosDidacticosPage,
    EducacionAmbientalPage,
    MediotecaPage,
    LinksPage,
    ContactoPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    QuienesSomosPage,
    EducacionVialPage,
    RecursosDidacticosPage,
    EducacionAmbientalPage,
    MediotecaPage,
    LinksPage,
    ContactoPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
