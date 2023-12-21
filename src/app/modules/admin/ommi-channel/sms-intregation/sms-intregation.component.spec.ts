import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsIntregationComponent } from './sms-intregation.component';

describe('SmsIntregationComponent', () => {
  let component: SmsIntregationComponent;
  let fixture: ComponentFixture<SmsIntregationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmsIntregationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmsIntregationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
