import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcesnikSvePorukeComponent } from './ucesnik-sve-poruke.component';

describe('UcesnikSvePorukeComponent', () => {
  let component: UcesnikSvePorukeComponent;
  let fixture: ComponentFixture<UcesnikSvePorukeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UcesnikSvePorukeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UcesnikSvePorukeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
