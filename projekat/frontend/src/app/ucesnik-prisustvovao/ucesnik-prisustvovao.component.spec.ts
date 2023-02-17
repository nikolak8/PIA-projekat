import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcesnikPrisustvovaoComponent } from './ucesnik-prisustvovao.component';

describe('UcesnikPrisustvovaoComponent', () => {
  let component: UcesnikPrisustvovaoComponent;
  let fixture: ComponentFixture<UcesnikPrisustvovaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UcesnikPrisustvovaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UcesnikPrisustvovaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
