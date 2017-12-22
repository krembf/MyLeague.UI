import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  teams: Array<{ name: string, w: string, l: string }>;
  incomingGames: Array<{ round: string, home: string, away: string, date: string, location: string }>;
  pastGames: Array<{ round: string, home: string, away: string, date: string, score: string }>;
  scorers: Array<{ name: string, goals: number }>;

  constructor(public navCtrl: NavController) {

    this.teams = [
      { name: 'AllStars', w: '9', l: '0' },
      { name: 'Richboro Pub', w: '8', l: '1' },
      { name: 'Reds', w: '7', l: '1' },
    ];

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

    this.pastGames = [
      {
        round: "Round 6",
        home: "InterStars",
        away: "Reds",
        date: "Sep 18, 2017 9AM",
        score: "5:2"
      },
      {
        round: "Round 5",
        home: "InterStars",
        away: "El Barrio",
        date: "Sep 26, 2017 9AM",
        score: "6:1"
      },
      {
        round: "Round 4",
        home: "InterStars",
        away: "FC Orange",
        date: "Oct 2, 2017 9AM",
        score: "3:2"
      },
    ];

    this.scorers = [
      {
        name: 'Nissan Levy',
        goals: 5
      },
      {
        name: 'Sasha Tamarkin',
        goals: 3
      }
    ];   
  }

}
