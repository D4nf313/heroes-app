import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  validateLogin(username: string, password: string): Observable<boolean> {
    // Validación simple: si el usuario es admin@admin.com y la contraseña es "Admin"
    if (username === 'admin@admin.com' && password === 'Admin') {
      return of(true); // Usuario y contraseña correctos
    } else {
      return of(false); // Usuario o contraseña incorrectos
    }
  }
}
