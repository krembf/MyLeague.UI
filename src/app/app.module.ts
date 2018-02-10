import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
//import { LeagueDetailsPage } from '../pages/league-details/league-details';
import { ProfilePage } from '../pages/profile/profile';
import { HttpModule } from '@angular/http';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LeagueProvider } from '../providers/league/league';
import { ScorersProvider } from '../providers/scorers/scorers';
import { GamesProvider } from '../providers/games/games';
import { UserInfoProvider }  from '../providers/user-info/user-info';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
//    LeagueDetailsPage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    //LeagueDetailsPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LeagueProvider,
    ScorersProvider,
    GamesProvider,
    UserInfoProvider
  ]
})
export class AppModule {}
