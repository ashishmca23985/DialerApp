import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorlayoutComponent } from './supervisorlayout.component';

describe('SupervisorlayoutComponent', () => {
  let component: SupervisorlayoutComponent;
  let fixture: ComponentFixture<SupervisorlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupervisorlayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupervisorlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
