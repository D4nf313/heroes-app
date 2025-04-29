import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonajesListComponent } from './personajes-list.component';


describe('HeroesListComponent', () => {
  let component: PersonajesListComponent;
  let fixture: ComponentFixture<PersonajesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonajesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonajesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
