import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizatorRadioniceDetaljiComponent } from './organizator-radionice-detalji.component';

describe('OrganizatorRadioniceDetaljiComponent', () => {
  let component: OrganizatorRadioniceDetaljiComponent;
  let fixture: ComponentFixture<OrganizatorRadioniceDetaljiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizatorRadioniceDetaljiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizatorRadioniceDetaljiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
