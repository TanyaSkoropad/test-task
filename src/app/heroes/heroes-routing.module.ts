import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyHeroesComponent } from './components/my-heroes/my-heroes.component';
import { AllHeroesComponent } from './components/all-heroes/all-heroes.component';
import { HeroesComponent } from './heroes.component';

const routes: Routes = [
  {
    path: '',
    component: HeroesComponent,
    children: [
      {
        path: '',
        component: MyHeroesComponent,
      },
      {
        path: 'all-heroes',
        component: AllHeroesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
