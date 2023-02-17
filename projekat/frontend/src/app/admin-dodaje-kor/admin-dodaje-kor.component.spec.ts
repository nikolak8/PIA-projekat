import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDodajeKorComponent } from './admin-dodaje-kor.component';

describe('AdminDodajeKorComponent', () => {
  let component: AdminDodajeKorComponent;
  let fixture: ComponentFixture<AdminDodajeKorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDodajeKorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDodajeKorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
