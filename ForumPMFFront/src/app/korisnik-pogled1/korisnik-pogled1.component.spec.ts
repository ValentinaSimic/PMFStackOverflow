import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KorisnikPogled1Component } from './korisnik-pogled1.component';

describe('KorisnikPogled1Component', () => {
  let component: KorisnikPogled1Component;
  let fixture: ComponentFixture<KorisnikPogled1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KorisnikPogled1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KorisnikPogled1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
