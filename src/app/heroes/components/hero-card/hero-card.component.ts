import { Component, Input, OnInit } from '@angular/core';
import { HeroInterface } from '../../models/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss'],
})
export class HeroCardComponent implements OnInit {
  @Input()
  hero: HeroInterface | undefined;
  @Input()
  myHeroes: boolean | undefined;

  startedTraining: boolean = false;

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {}

  startTraining() {
    this.startedTraining = true;
  }

  changeCurrentPower(newCurrentPower: string) {
    this.heroesService.setNewCurrentPower(this.hero?.id, +newCurrentPower);
    this.startedTraining = false;
  }
}
