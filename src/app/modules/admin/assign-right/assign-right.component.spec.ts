import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignRightComponent } from './assign-right.component';

describe('AssignRightComponent', () => {
  let component: AssignRightComponent;
  let fixture: ComponentFixture<AssignRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignRightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
