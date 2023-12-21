import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispostionDetailsComponent } from './dispostion-details.component';

describe('DispostionDetailsComponent', () => {
  let component: DispostionDetailsComponent;
  let fixture: ComponentFixture<DispostionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispostionDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DispostionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
