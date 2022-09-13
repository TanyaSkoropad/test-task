import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  loginForm: FormGroup;
  encyptedPassword: string = '';
  trainerId: number = 0;
  trainerPassword: string = '';
  invalidCreds: boolean = false;

  constructor(private userService: UserService, private router: Router) {
    this.loginForm = new FormGroup({
      login: new FormControl(null, Validators.required),
      password: new FormControl(null, [
        Validators.required,
        this.validatePassword.bind(this),
      ]),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    const loginAnswer = this.userService.login(
      this.loginForm.get('login')?.value,
      this.loginForm.get('password')?.value
    );
    if (loginAnswer.success) {
      this.invalidCreds = false;
      this.router.navigate(['heroes']);
    } else {
      this.invalidCreds = true;
    }
  }

  validatePassword(
    passwordControl: FormControl
  ): { [s: string]: boolean } | null {
    const passwordRegex = new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[^\\da-zA-Z]).{8,}$'
    );
    if (!passwordRegex.test(passwordControl.value)) {
      return { invalidPassword: true };
    }
    return null;
  }
}
