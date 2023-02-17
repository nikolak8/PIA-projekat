import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPredloziRadComponent } from './admin-predlozi-rad.component';

describe('AdminPredloziRadComponent', () => {
  let component: AdminPredloziRadComponent;
  let fixture: ComponentFixture<AdminPredloziRadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPredloziRadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPredloziRadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
