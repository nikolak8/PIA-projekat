import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcesnikDodajeRadComponent } from './ucesnik-dodaje-rad.component';

describe('UcesnikDodajeRadComponent', () => {
  let component: UcesnikDodajeRadComponent;
  let fixture: ComponentFixture<UcesnikDodajeRadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UcesnikDodajeRadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UcesnikDodajeRadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
