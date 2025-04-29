import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { Character } from '../personajes.interface';

@Component({
  selector: 'app-detail-personaje',
  imports: [CommonModule, NzCardModule, NzDescriptionsModule, NzTagModule],
  templateUrl: './detail-personaje.component.html',
  styleUrl: './detail-personaje.component.css',
})
export class DetailPersonajeComponent {
  private activatedRoute = inject(ActivatedRoute);
  private personajesService = inject(RickAndMortyService);
  character = signal<Character | null>(null);

  ngOnInit(): void {
    // Obtener el id desde la URL
    const characterId = this.activatedRoute.snapshot.paramMap.get('id');

    if (characterId) {
      // Aquí deberías usar el servicio para obtener los detalles del personaje
      this.personajesService
        .getPersonajeById(+characterId)
        .subscribe((data) => {
          this.character.set(data);
        });
    }
  }
}
