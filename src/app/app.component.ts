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
    this.heroes = this.heroService.getHeroes();
  }

  onSelect(hero: Hero) {
    // this.heroService.setSelectedHero(hero);
    // console.log(hero.name);
    this.selectedHero = hero;
  }
}
