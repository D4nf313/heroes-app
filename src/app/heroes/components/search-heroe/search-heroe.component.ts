import { CommonModule } from '@angular/common';
import { Component, Signal, signal } from '@angular/core';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzListModule } from 'ng-zorro-antd/list';

@Component({
  selector: 'search-heroe',
  imports: [
    CommonModule,
    NzInputModule,
    NzButtonModule,
    NzListModule,
    NzAvatarModule
  ],
  templateUrl: './search-heroe.component.html',
  styleUrl: './search-heroe.component.css',
})
export class SearchHeroeComponent {

  // Signal para el término de búsqueda
  searchTerm =signal<string>('');

  // Signal para los resultados de la búsqueda
  searchResults: Signal<any[]> = signal([]);

  // Nueva forma de emitir los resultados a través de Signals
  resultsSignal = signal<any[]>([]);



  onSearchInputChange(event: any) {
    this.searchTerm.set(event.target.value);
  }

  // Método de búsqueda
  searchHeroe() {
    const term = this.searchTerm();
    console.log(term)
 /*    // Obtener el valor actual de la Signal
    if (term.trim() !== '') {
      this.heroService.searchHeroe(term).subscribe((results) => {
        this.searchResults.emit(results);  // Emitir los resultados obtenidos
      });
    } */
  }



}
