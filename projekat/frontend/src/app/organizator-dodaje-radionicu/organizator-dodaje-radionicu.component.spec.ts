import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizatorDodajeRadionicuComponent } from './organizator-dodaje-radionicu.component';

describe('OrganizatorDodajeRadionicuComponent', () => {
  let component: OrganizatorDodajeRadionicuComponent;
  let fixture: ComponentFixture<OrganizatorDodajeRadionicuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizatorDodajeRadionicuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizatorDodajeRadionicuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
