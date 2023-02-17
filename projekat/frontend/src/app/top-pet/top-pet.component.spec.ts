import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPetComponent } from './top-pet.component';

describe('TopPetComponent', () => {
  let component: TopPetComponent;
  let fixture: ComponentFixture<TopPetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopPetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
