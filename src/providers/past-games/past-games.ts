import { Http} from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PastGamesProvider {

  constructor(public http: Http) {
    console.log('Hello PastGamesProvider Provider');
  }
    get 
        PastGamesByLeague(){
          return([{
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
          }
        ])
      }
    }





