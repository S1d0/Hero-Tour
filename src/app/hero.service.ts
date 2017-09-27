import {Hero} from './Hero';
import {HEROES} from './mock.hero';


export class HeroService {
  private selectedHero: Hero;

  constructor() {
  }

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  setSelectedHero(hero: Hero) {
    this.selectedHero = hero;
  }

  getSelectedHero() {
    return this.selectedHero;
  }
}
