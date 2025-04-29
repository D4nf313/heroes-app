import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailPersonajeComponent } from './detail-personaje.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { Character } from '../personajes.interface';

fdescribe('DetailPersonajeComponent', () => {
  let component: DetailPersonajeComponent;
  let fixture: ComponentFixture<DetailPersonajeComponent>;
  let mockService: jasmine.SpyObj<RickAndMortyService>;

  const mockCharacter: Character = {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: { name: 'Earth', url: '' },
    location: { name: 'Earth', url: '' },
    image: '',
    episode: [],
    url: '',
    created: ''
  };

  beforeEach(() => {
    mockService = jasmine.createSpyObj('RickAndMortyService', ['getPersonajeById']);

    TestBed.configureTestingModule({
      providers: [
        DetailPersonajeComponent,
        { provide: RickAndMortyService, useValue: mockService },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => '1', // Simula ID de la URL
              }
            }
          }
        }
      ]
    });

    component = TestBed.inject(DetailPersonajeComponent);
  });

  it('debería cargar el personaje basado en el ID de la ruta', () => {
    mockService.getPersonajeById.and.returnValue(of(mockCharacter));

    component.ngOnInit();

    expect(mockService.getPersonajeById).toHaveBeenCalledWith(1);
    expect(component.character()).toEqual(mockCharacter);
  });
});
