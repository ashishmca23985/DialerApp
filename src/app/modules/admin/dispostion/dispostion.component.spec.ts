import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispostionComponent } from './dispostion.component';

describe('DispostionComponent', () => {
  let component: DispostionComponent;
  let fixture: ComponentFixture<DispostionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispostionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DispostionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
