import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/hero';

/*Displaying a List*/
import { HEROES } from 'src/app/server/mock-heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }
  constructor() { }

  ngOnInit() {
  }

  heroes = HEROES;
  selectedHero: Hero;
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
