import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizatorDetaljiComponent } from './organizator-detalji.component';

describe('OrganizatorDetaljiComponent', () => {
  let component: OrganizatorDetaljiComponent;
  let fixture: ComponentFixture<OrganizatorDetaljiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizatorDetaljiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizatorDetaljiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
