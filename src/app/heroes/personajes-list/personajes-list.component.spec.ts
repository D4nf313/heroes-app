import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonajesListComponent } from './personajes-list.component';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { ApiResponse } from '../personajes.interface';
import { mapToSimpleCharacters } from '../mapper-pj';

// Mocks
const mockApiResponse: ApiResponse = {
  info: { count: 2, pages: 1, next: null, prev: null },
  results: [
    {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      type: '', // <--- Campo agregado
      gender: 'Male',
      origin: { name: 'Earth', url: '' },
      location: { name: 'Earth', url: '' },
      image: '',
      episode: [],
      url: '',
      created: '',
    },
    {
      id: 2,
      name: 'Morty Smith',
      status: 'Alive',
      species: 'Human',
      type: '', // <--- Campo agregado
      gender: 'Male',
      origin: { name: 'Earth', url: '' },
      location: { name: 'Earth', url: '' },
      image: '',
      episode: [],
      url: '',
      created: '',
    },
  ],
};

describe('PersonajesListComponent', () => {
  let component: PersonajesListComponent;
  let fixture: ComponentFixture<PersonajesListComponent>;
  let mockService: jasmine.SpyObj<RickAndMortyService>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    mockService = jasmine.createSpyObj('RickAndMortyService', [
      'getPersonajes',
    ]);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [PersonajesListComponent],
      providers: [
        { provide: RickAndMortyService, useValue: mockService },
        { provide: Router, useValue: mockRouter },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonajesListComponent);
    component = fixture.componentInstance;
  });

  it('debería crearse el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería cargar los personajes en getPersonajes', () => {
    mockService.getPersonajes.and.returnValue(of(mockApiResponse));
    component.getPersonajes(1);
    expect(component.listOfData().length).toBe(2);
    expect(component.total()).toBe(2);
  });

  it('debería cambiar la página actual en onPageIndexChange', () => {
    spyOn(component, 'getPersonajes');
    component.onPageIndexChange(3);
    expect(component.currentPage()).toBe(3);
    expect(component.getPersonajes).toHaveBeenCalledWith(3);
  });

  it('debería ordenar los personajes por nombre al llamar sortByName', () => {
    const data = mapToSimpleCharacters(mockApiResponse.results.reverse());
    component.listOfData.set(data);
    component.sortByName();
    expect(component.listOfData()[0].name).toBe('Morty Smith');
  });

  it('debería navegar a los detalles con goToDetail', () => {
    component.goToDetail(42);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['personajes/detail', 42]);
  });
});
