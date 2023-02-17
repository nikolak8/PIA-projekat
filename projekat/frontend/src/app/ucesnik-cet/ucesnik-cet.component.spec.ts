import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcesnikCetComponent } from './ucesnik-cet.component';

describe('UcesnikCetComponent', () => {
  let component: UcesnikCetComponent;
  let fixture: ComponentFixture<UcesnikCetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UcesnikCetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UcesnikCetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
