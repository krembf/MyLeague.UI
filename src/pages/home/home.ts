import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LeagueProvider } from '../../providers/league/league';
import { ScorersProvider } from '../../providers/scorers/scorers';
//import { PastGamesProvider } from '../../providers/past-games/past-games';
//import { IncomingGamesProvider } from '../../providers/incoming-games/incoming-games';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {

  teams: Array<{ name: string, w: string, l: string }>;
  incomingGames: Array<{ round: string, home: string, away: string, date: string, location: string }>;
  //pastGames: Array<{ round: string, home: string, away: string, date: string, score: string }>;
  scorers: Array<{ name: string, goals: number }>;

  constructor(
    public navCtrl: NavController,
    private leagueProvider: LeagueProvider,
    private scorersProvider: ScorersProvider) { 
      this.incomingGames = [
        {
          round: "Round 7",
          home: "InterStars",
          away: "Reds",
          date: "Sep 18, 2017 9AM",
          location: "Richboro Elementary School"
        },
        {
          round: "Round 8",
          home: "InterStars",
          away: "El Barrio",
          date: "Sep 26, 2017 9AM",
          location: "Richboro Elementary School"
        },
        {
          round: "Round 9",
          home: "InterStars",
          away: "FC Orange",
          date: "Oct 2, 2017 9AM",
          location: "Richboro Elementary School"
        },
      ];
    }
  //private pastGamesProvider:PastGamesProvider,
  //private incomingGamesProvider:IncomingGamesProvider)

  ionViewWillEnter() {
    this.teams = this.leagueProvider.TeamsByLeague;
    this.scorers = this.scorersProvider.ScorersByTeam;
    //this.pastGames = this.pastGamesProvider.PastGamesByLeague;
    //this.incomingGames = this.incomingGamesProvider.IncomingGamesByLeague;
  }
}
