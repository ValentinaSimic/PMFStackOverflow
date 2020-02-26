import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoPitanjeComponent } from './novo-pitanje.component';

describe('NovoPitanjeComponent', () => {
  let component: NovoPitanjeComponent;
  let fixture: ComponentFixture<NovoPitanjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoPitanjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoPitanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
