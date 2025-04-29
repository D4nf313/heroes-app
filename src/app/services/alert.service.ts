import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2'; // Asegúrate de que esta línea esté presente al principio del archivo

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  // Método para mostrar un mensaje de éxito
  showSuccessMessage(title: string, message: string) {
    Swal.fire(title, message, 'success');
  }

  // Método para mostrar un mensaje de error
  showErrorMessage(title: string, message: string) {
    Swal.fire(title, message, 'error');
  }
  showToast(message: string) {
    Swal.fire({
      toast: true,
      position: 'bottom-end', // Fijo: abajo a la derecha
      icon: 'info',            // Fijo: ícono de información
      title: message,
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      background: '#fff',
    });
  }

}
