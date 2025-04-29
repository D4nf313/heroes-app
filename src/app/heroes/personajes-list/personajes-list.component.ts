import { Component, inject, signal } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { ApiResponse, CharacterSimple } from '../personajes.interface';
import { mapToSimpleCharacters } from '../mapper-pj';
import {
  NzTableFilterFn,
  NzTableFilterList,
  NzTableModule,
  NzTableSortFn,
  NzTableSortOrder,
} from 'ng-zorro-antd/table';
import { CommonModule } from '@angular/common';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { Router, RouterLink } from '@angular/router';

interface ColumnItem {
  name: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn<CharacterSimple> | null;
}
@Component({
  selector: 'personajes-list',
  imports: [
    CommonModule,
    NzTableModule,
    NzPaginationModule,
    NzButtonModule,
    NzIconModule,
  ],
  templateUrl: './personajes-list.component.html',
  styleUrl: './personajes-list.component.css',
})
export class PersonajesListComponent {
  private pjService = inject(RickAndMortyService);
  private router = inject(Router);
  listOfData = signal<CharacterSimple[]>([]); // Signal para los datos
  total = signal<number>(0); // Signal para el total de elementos
  currentPage = signal<number>(1); // Signal para la página actual
  listOfColumns = signal<ColumnItem[]>([
    {
      name: 'Name',
      sortOrder: null,
      sortFn: (a, b) => a.name.localeCompare(b.name),
    },
    {
      name: 'Species',
      sortOrder: null,
      sortFn: (a, b) => a.species.localeCompare(b.species),
    },
    {
      name: 'Gender',
      sortOrder: null,
      sortFn: (a, b) => a.gender.localeCompare(b.gender),
    },
    {
      name: 'Status',
      sortOrder: null,
      sortFn: (a, b) => a.status.localeCompare(b.status),
    },
  ]);

  ngOnInit(): void {
    this.getPersonajes(this.currentPage());
  }
  getPersonajes(pagina: number) {
    this.pjService.getPersonajes(pagina).subscribe((data: ApiResponse) => {
      const personajesReducidos = mapToSimpleCharacters(data.results);
      this.listOfData.set(personajesReducidos);
      this.total.set(data.info.count); // Actualiza el total usando signal
    });
  }

  onPageIndexChange(pageIndex: number): void {
    this.currentPage.set(pageIndex); // Actualiza la página actual
    this.getPersonajes(pageIndex); // Carga los personajes de la nueva página
  }

  sortByName(): void {
    // Cambiar el estado de la columna 'Name' para alternar entre ascendente y descendente
    this.listOfColumns().forEach((item) => {
      if (item.name === 'Name') {
        item.sortOrder = item.sortOrder === 'ascend' ? 'descend' : 'ascend';
      } else {
        item.sortOrder = null;
      }
    });

    // Ordenar los datos según la columna 'Name'
    const sortedData = [...this.listOfData()].sort((a, b) => {
      return this.listOfColumns()[0].sortFn!(a, b); // Ordena por 'Name'
    });

    // Actualizar los datos ordenados
    this.listOfData.set(sortedData);
  }

  goToDetail(characterId: number): void {
    this.router.navigate(['personajes/detail', characterId]);
  }
}
