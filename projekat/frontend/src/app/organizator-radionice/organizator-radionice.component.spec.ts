import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizatorRadioniceComponent } from './organizator-radionice.component';

describe('OrganizatorRadioniceComponent', () => {
  let component: OrganizatorRadioniceComponent;
  let fixture: ComponentFixture<OrganizatorRadioniceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizatorRadioniceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizatorRadioniceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
