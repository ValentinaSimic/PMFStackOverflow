import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KorisnikPogledComponent } from './korisnik-pogled.component';

describe('KorisnikPogledComponent', () => {
  let component: KorisnikPogledComponent;
  let fixture: ComponentFixture<KorisnikPogledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KorisnikPogledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KorisnikPogledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
