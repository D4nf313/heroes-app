import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoginService } from '../services/login.service';
import { AlertService } from '../services/alert.service';
import { of } from 'rxjs';

// Mocks para servicios
class MockLoginService {
  validateLogin(username: string, password: string) {
    return of(false); // Valor por defecto, se sobrescribe en cada test
  }
}

class MockAlertService {
  showToast(message: string) {}
}
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginService: LoginService;
  let alertService: AlertService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent, ReactiveFormsModule, RouterTestingModule],
      providers: [
        FormBuilder,
        { provide: LoginService, useClass: MockLoginService },
        { provide: AlertService, useClass: MockAlertService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    loginService = TestBed.inject(LoginService);
    alertService = TestBed.inject(AlertService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with required fields', () => {
    expect(component.loginForm.contains('username')).toBeTrue();
    expect(component.loginForm.contains('password')).toBeTrue();
    expect(component.loginForm.get('username')?.hasError('required')).toBeTrue();
    expect(component.loginForm.get('password')?.hasError('required')).toBeTrue();
  });

  it('should update recaptcha signals on resolution', () => {
    const testToken = 'test-token';
    component.onCaptchaResolved(testToken);
    expect(component.recaptchaCompleted()).toBeTrue();
    expect(component.recaptchaToken()).toBe(testToken);

    component.onCaptchaResolved(null);
    expect(component.recaptchaCompleted()).toBeFalse();
    expect(component.recaptchaToken()).toBeNull();
  });

  it('should show toast and prevent submission if form is invalid', () => {
    spyOn(alertService, 'showToast');
    component.loginForm.setValue({ username: '', password: '' });
    component.onSubmit();
    expect(alertService.showToast).toHaveBeenCalledWith('Usuario o contraseña incorrectos');
  });

  it('should call loginService when form is valid and recaptcha completed', () => {
    spyOn(loginService, 'validateLogin').and.returnValue(of(true));
    spyOn(alertService, 'showToast');
    spyOn(router, 'navigate');

    component.loginForm.setValue({ username: 'test', password: '123' });
    component.onCaptchaResolved('valid-token');
    component.onSubmit();

    expect(loginService.validateLogin).toHaveBeenCalledWith('test', '123');
    expect(alertService.showToast).toHaveBeenCalledWith('Inicio de sesión exitoso');
  });

  it('should navigate after successful login', fakeAsync(() => {
    spyOn(loginService, 'validateLogin').and.returnValue(of(true));
    spyOn(router, 'navigate');

    component.loginForm.setValue({ username: 'test', password: '123' });
    component.onCaptchaResolved('valid-token');
    component.onSubmit();

    tick(2000); // Avanza el tiempo para el setTimeout
    expect(router.navigate).toHaveBeenCalledWith(['personajes/list']);
  }));
});
