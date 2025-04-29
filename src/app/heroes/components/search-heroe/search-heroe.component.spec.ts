import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHeroeComponent } from './search-heroe.component';

describe('SearchHeroeComponent', () => {
  let component: SearchHeroeComponent;
  let fixture: ComponentFixture<SearchHeroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchHeroeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
