import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { LoginService } from '../services/login.service';
import { AlertService } from '../services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCardModule,
    RecaptchaModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private loginService = inject(LoginService);
  private alertService = inject(AlertService);
  private router = inject(Router);
  loginForm!: FormGroup;
  recaptchaCompleted = signal(false);
  recaptchaToken = signal<string | null>(null);

  constructor() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  onCaptchaResolved(token: string | null) {
    if (token) {
      this.recaptchaCompleted.set(true);
      this.recaptchaToken.set(token);
    } else {
      this.recaptchaCompleted.set(false);
      this.recaptchaToken.set(null);
    }
  }
  onSubmit() {
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;
    if (this.loginForm.invalid || !this.recaptchaCompleted()) {
      this.alertService.showToast('Usuario o contraseña incorrectos');
      return;
    }
    this.loginService
      .validateLogin(username, password)
      .subscribe((isValidate: boolean) => {
        if (isValidate) {
          this.alertService.showToast('Inicio de sesión exitoso');
          setTimeout(() => {
            this.router.navigate(['personajes/list']);
          }, 2000); 
        }
      });
  }
}
