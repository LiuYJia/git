import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { RecmyPage } from '../pages/recmy/recmy';
import { RecloginPage } from '../pages/reclogin/reclogin';
import { LoginPage } from '../pages/login/login';
import { StartPage } from '../pages/start/start';
import { SeekmessagePage } from '../pages/seekmessage/seekmessage';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage:any = TabsPage;
  rootPage:any = RecmyPage;
  //rootPage:any = LoginPage;
  //rootPage:any = StartPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
