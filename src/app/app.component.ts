import {Component, OnInit} from '@angular/core';
import {Hero} from './Hero';
import {HeroService} from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.heroService.getHeroes().then(
      HEROES => this.heroes = HEROES);
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
