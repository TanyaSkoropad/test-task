import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyHeroesComponent } from './components/my-heroes/my-heroes.component';
import { AllHeroesComponent } from './components/all-heroes/all-heroes.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { HeroesComponent } from './heroes.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [
    MyHeroesComponent,
    AllHeroesComponent,
    HeroCardComponent,
    HeroesComponent,
    NavigationComponent,
  ],
  imports: [CommonModule, HeroesRoutingModule],
  exports: [],
})
export class HeroesModule {}
