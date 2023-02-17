import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDodajeRadComponent } from './admin-dodaje-rad.component';

describe('AdminDodajeRadComponent', () => {
  let component: AdminDodajeRadComponent;
  let fixture: ComponentFixture<AdminDodajeRadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDodajeRadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDodajeRadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
