import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAzuriraKorComponent } from './admin-azurira-kor.component';

describe('AdminAzuriraKorComponent', () => {
  let component: AdminAzuriraKorComponent;
  let fixture: ComponentFixture<AdminAzuriraKorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAzuriraKorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAzuriraKorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
