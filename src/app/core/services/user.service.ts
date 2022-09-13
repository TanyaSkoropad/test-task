import { Injectable } from '@angular/core';
import { trainers } from '../mocks/trainers';
import { UserInterface } from '../models/user.model';

import { EncrDecrService } from './encrypt-decrypt.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private decodeParam: string = '123456$#@$^@1ERF';
  private currentUser: UserInterface | undefined;

  constructor(private encrDecrService: EncrDecrService) {
    const user = localStorage.getItem('user');
    if (user) {
      this.currentUser = JSON.parse(user);
    }
  }

  public login(login: string, password: string) {
    const foundTrainer: UserInterface | undefined = trainers.find(
      (trainer) =>
        trainer.login === login &&
        this.decodePassword(trainer.password) === password
    );
    if (foundTrainer) {
      this.currentUser = foundTrainer;
      localStorage.setItem('user', JSON.stringify(foundTrainer));
      return { success: true };
    } else {
      return { success: false, errorMessage: 'Incorrect login of password' };
    }
  }

  public getCurrentUserId() {
    return this.currentUser?.id;
  }

  public get isLoginedIn(): boolean {
    return !!this.currentUser;
  }

  private decodePassword(password: string) {
    return this.encrDecrService.get(this.decodeParam, password);
  }
}
