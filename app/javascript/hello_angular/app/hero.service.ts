import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroes.json';

  constructor(private http: Http) {}

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl).toPromise()
      .then(response => response.json()  as Hero[])
      .catch(this.handleError);
  };

  getHero(id: number): Promise<Hero> {
    let heroUrl = `api/heroes/${id}.json`;
    return this.http.get(heroUrl).toPromise()
      .then(response => response.json() as Hero)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
