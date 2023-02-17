import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAzuriraRadComponent } from './admin-azurira-rad.component';

describe('AdminAzuriraRadComponent', () => {
  let component: AdminAzuriraRadComponent;
  let fixture: ComponentFixture<AdminAzuriraRadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAzuriraRadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAzuriraRadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
