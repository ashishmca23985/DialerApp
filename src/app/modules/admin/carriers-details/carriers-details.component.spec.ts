import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarriersDetailsComponent } from './carriers-details.component';

describe('CarriersDetailsComponent', () => {
  let component: CarriersDetailsComponent;
  let fixture: ComponentFixture<CarriersDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarriersDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarriersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
