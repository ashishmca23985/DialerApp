import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailIntregationComponent } from './email-intregation.component';

describe('EmailIntregationComponent', () => {
  let component: EmailIntregationComponent;
  let fixture: ComponentFixture<EmailIntregationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailIntregationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailIntregationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
