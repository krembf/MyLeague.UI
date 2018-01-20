import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ScorersProvider {

  constructor(public http: Http) {
    console.log('Hello ScorersProvider Provider');
  }
  get ScorersByTeam(){
    return([
      {
        name: 'Nissan Levy',
        goals: 5
      },
      {
        name: 'Sasha Tamarkin',
        goals: 3
      }
    ])   
  }

}

