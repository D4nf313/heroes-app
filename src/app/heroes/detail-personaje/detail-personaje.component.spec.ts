import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPersonajeComponent } from './detail-personaje.component';

describe('DetailPersonajeComponent', () => {
  let component: DetailPersonajeComponent;
  let fixture: ComponentFixture<DetailPersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailPersonajeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailPersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
