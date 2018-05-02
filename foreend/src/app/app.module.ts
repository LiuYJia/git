import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { PwbackPage } from '../pages/pwback/pwback';
import { RechomePage } from '../pages/rechome/rechome';
import { RecmessagePage } from '../pages/recmessage/recmessage';
import { RecmiddlePage } from '../pages/recmiddle/recmiddle';
import { RecnearPage } from '../pages/recnear/recnear';
import { RecmyPage } from '../pages/recmy/recmy';
import { RectabsPage } from '../pages/rectabs/rectabs';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    PwbackPage,
    RechomePage,
    RecmessagePage,
    RecmiddlePage,
    RecnearPage,
    RecmyPage,
    RectabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,   
    LoginPage,
    RegisterPage,
    PwbackPage,
    RechomePage,
    RecmessagePage,
    RecmiddlePage,
    RecnearPage,
    RecmyPage,
    RectabsPage 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
