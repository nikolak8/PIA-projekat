import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcesnikSveRadComponent } from './ucesnik-sve-rad.component';

describe('UcesnikSveRadComponent', () => {
  let component: UcesnikSveRadComponent;
  let fixture: ComponentFixture<UcesnikSveRadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UcesnikSveRadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UcesnikSveRadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
