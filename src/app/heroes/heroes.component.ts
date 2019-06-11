import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/hero';

/*Displaying a List*/
// import { HEROES } from 'src/app/server/mock-heroes';


import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // }
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  // heroes = HEROES;
  // selectedHero: Hero;
  
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }

  /*Servicio */

  heroes: Hero[];

  // getHeroes(): void
  // {
  //   this.Hero = this.heroService.getHeroes();
  // }  

  getHeroes(): void 
  {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);  
  }

}
