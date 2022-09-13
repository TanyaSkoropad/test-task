import { Component, OnInit } from '@angular/core';
import { HeroInterface } from '../../models/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-all-heroes',
  templateUrl: './all-heroes.component.html',
  styleUrls: ['./all-heroes.component.scss'],
})
export class AllHeroesComponent implements OnInit {
  allHeroes: HeroInterface[] | null = null;

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.allHeroes = this.heroesService.getAllHeroes();
  }
}
