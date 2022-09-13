import { Ability } from 'src/app/heroes/enums/ability.enum';
import { HeroInterface } from 'src/app/heroes/models/heroes.interface';

export const heroes: HeroInterface[] = [
  {
    id: 1,
    name: 'First Hero',
    ability: Ability.attacker,
    guidId: 1,
    startTrainingDate: new Date('December 17, 1995'),
    suitColors: ['yellow'],
    startingPower: 15,
    currentPower: 30,
  },
  {
    id: 2,
    name: 'Second Hero',
    ability: Ability.deffender,
    guidId: 2,
    startTrainingDate: new Date('December 17, 2000'),
    suitColors: ['black', 'white'],
    startingPower: 40,
    currentPower: 50,
  },
  {
    id: 2,
    name: 'Third Hero',
    ability: Ability.deffender,
    guidId: 1,
    startTrainingDate: new Date('December 17, 2010'),
    suitColors: ['black', 'purple'],
    startingPower: 100,
    currentPower: 150,
  },
];
