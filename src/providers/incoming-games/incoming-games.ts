import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class IncomingGamesProvider {

  constructor(public http: Http) {
    console.log('Hello IncomingGamesProvider Provider');
  }
  get
      IncomingGamesByLeague(){
        return([
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
              }
            ]) 
          }
        }