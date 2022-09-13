import { Injectable } from '@angular/core';

import { heroes } from 'src/app/core/mocks/heroes';
import { HeroInterface } from '../models/heroes.interface';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  currentUserId: number = 0;
  myHeroes: HeroInterface[] = [];

  constructor() {
    const user = localStorage.getItem('user');
    if (user) {
      this.currentUserId = JSON.parse(user).id;
    }
  }

  public getAllHeroes(): HeroInterface[] {
    return heroes.filter((hero) => hero.guidId !== this.currentUserId);
  }

  public getMyHeroes(): HeroInterface[] {
    this.myHeroes = heroes.filter((hero) => hero.guidId === this.currentUserId);
    return this.myHeroes;
  }

  public setNewCurrentPower(
    heroId: number | undefined,
    newCurrentPower: number
  ) {
    this.myHeroes.map((myHero) => {
      if (myHero.id === heroId) {
        return (myHero.currentPower += newCurrentPower);
      } else {
        return myHero;
      }
    });
  }
}
