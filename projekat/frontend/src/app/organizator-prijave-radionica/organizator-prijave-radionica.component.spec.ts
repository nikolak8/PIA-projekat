import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizatorPrijaveRadionicaComponent } from './organizator-prijave-radionica.component';

describe('OrganizatorPrijaveRadionicaComponent', () => {
  let component: OrganizatorPrijaveRadionicaComponent;
  let fixture: ComponentFixture<OrganizatorPrijaveRadionicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizatorPrijaveRadionicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizatorPrijaveRadionicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
