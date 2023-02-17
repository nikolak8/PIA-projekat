import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadionicaStatistikaComponent } from './radionica-statistika.component';

describe('RadionicaStatistikaComponent', () => {
  let component: RadionicaStatistikaComponent;
  let fixture: ComponentFixture<RadionicaStatistikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadionicaStatistikaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadionicaStatistikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
