import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcesnikMojeAkcijeComponent } from './ucesnik-moje-akcije.component';

describe('UcesnikMojeAkcijeComponent', () => {
  let component: UcesnikMojeAkcijeComponent;
  let fixture: ComponentFixture<UcesnikMojeAkcijeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UcesnikMojeAkcijeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UcesnikMojeAkcijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
