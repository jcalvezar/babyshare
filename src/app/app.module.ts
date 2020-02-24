import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; 

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AboutPage } from '../pages/about/about';
import { LoginPage } from '../pages/login/login';
import { LogbabyPage } from '../pages/logbaby/logbaby';
import { LogadultPage } from '../pages/logadult/logadult';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { JcaweberProvider } from '../providers/jcaweber/jcaweber';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
	AboutPage,
	LoginPage,
	LogbabyPage,
	LogadultPage
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
	AboutPage,
	LoginPage,
	LogbabyPage,
	LogadultPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    JcaweberProvider
  ]
})
export class AppModule {}
