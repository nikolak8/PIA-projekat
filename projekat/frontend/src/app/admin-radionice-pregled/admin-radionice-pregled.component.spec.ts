import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRadionicePregledComponent } from './admin-radionice-pregled.component';

describe('AdminRadionicePregledComponent', () => {
  let component: AdminRadionicePregledComponent;
  let fixture: ComponentFixture<AdminRadionicePregledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRadionicePregledComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminRadionicePregledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
