import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LeagueProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LeagueProvider {

  constructor(public http: Http) {
    console.log('Hello LeagueProvider Provider');
  }
  get TeamsByLeague(){
    return( [
      { name: 'AllStars', w: '9', l: '0' },
      { name: 'Richboro Pub', w: '8', l: '1' },
      { name: 'Reds', w: '7', l: '1' },
      { name: 'Blues', w: '5',l: '4'},
    ])
  }
  

}
