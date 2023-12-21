import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallTimezoneComponent } from './call-timezone.component';

describe('CallTimezoneComponent', () => {
  let component: CallTimezoneComponent;
  let fixture: ComponentFixture<CallTimezoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallTimezoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallTimezoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
