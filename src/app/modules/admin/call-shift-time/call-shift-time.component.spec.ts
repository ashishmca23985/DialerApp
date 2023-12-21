import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallShiftTimeComponent } from './call-shift-time.component';

describe('CallShiftTimeComponent', () => {
  let component: CallShiftTimeComponent;
  let fixture: ComponentFixture<CallShiftTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallShiftTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallShiftTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
