import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PitanjaKategorijaComponent } from './pitanja-kategorija.component';

describe('PitanjaKategorijaComponent', () => {
  let component: PitanjaKategorijaComponent;
  let fixture: ComponentFixture<PitanjaKategorijaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PitanjaKategorijaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PitanjaKategorijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
