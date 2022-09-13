import { Component, OnInit } from '@angular/core';
import { HeroInterface } from '../../models/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-my-heroes',
  templateUrl: './my-heroes.component.html',
  styleUrls: ['./my-heroes.component.scss'],
})
export class MyHeroesComponent implements OnInit {
  myHeroes: HeroInterface[] | null = null;
  ascendingOrder: boolean = false;

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.myHeroes = this.heroesService.getMyHeroes();
  }

  sortCards() {
    this.ascendingOrder = !this.ascendingOrder;
    this.heroesService.sortHeroes(this.ascendingOrder ? 'asc' : 'desc');
  }
}
