import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookIntregationComponent } from './facebook-intregation.component';

describe('FacebookIntregationComponent', () => {
  let component: FacebookIntregationComponent;
  let fixture: ComponentFixture<FacebookIntregationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacebookIntregationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacebookIntregationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
