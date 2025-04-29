import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCardModule,
    RecaptchaModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  private fb = inject(FormBuilder);

  loginForm!: FormGroup;
  recaptchaCompleted = false;
  recaptchaToken: string | null = null;

  constructor() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  onCaptchaResolved(token: string | null) {
    if (token) {
      console.log('reCAPTCHA resuelto con token:', token);
      this.recaptchaCompleted = true;
      this.recaptchaToken = token;
    } else {
      console.log('reCAPTCHA falló o expiró');
      this.recaptchaCompleted = false;
      this.recaptchaToken = null;
    }
  }
  onSubmit() {
    if (this.loginForm.invalid || !this.recaptchaCompleted) {
      console.log('Formulario inválido o captcha no resuelto');
      return;
    }

    console.log('Formulario enviado:', this.loginForm.value, 'Token:', this.recaptchaToken);
  }
}
