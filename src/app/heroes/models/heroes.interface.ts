import { Ability } from '../enums/ability.enum';

export interface HeroInterface {
  id: number;
  name: string;
  ability: Ability;
  guidId: number;
  startTrainingDate: Date;
  suitColors: string[];
  startingPower: number;
  currentPower: number;
}
