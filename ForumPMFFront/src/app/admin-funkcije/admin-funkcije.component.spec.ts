import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFunkcijeComponent } from './admin-funkcije.component';

describe('AdminFunkcijeComponent', () => {
  let component: AdminFunkcijeComponent;
  let fixture: ComponentFixture<AdminFunkcijeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFunkcijeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFunkcijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
