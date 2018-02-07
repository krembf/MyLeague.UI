import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LeagueProvider } from '../../providers/league/league';
import { ScorersProvider } from '../../providers/scorers/scorers';
import { GamesProvider } from '../../providers/games/games';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  teams: Array<{ name: string, w: string, l: string }>;
  incomingGames: Array<{ round: string, home: string, away: string, date: string, location: string }>;
  pastGames: Array<{ round: string, home: string, away: string, date: string, score: string }>;
  scorers: Array<{ name: string, goals: number }>;

  constructor(
    public navCtrl: NavController,
    private leagueProvider: LeagueProvider,
    private gamesProvider: GamesProvider,
    private scorersProvider: ScorersProvider){
    this.incomingGames = this.gamesProvider.IncomingGamesByLeague;
    this.pastGames = this.gamesProvider.PastGamesByLeague;
  }

  ionViewWillEnter() {
    this.teams = this.leagueProvider.TeamsByLeague;
    this.scorers = this.scorersProvider.ScorersByTeam;
  }
}
