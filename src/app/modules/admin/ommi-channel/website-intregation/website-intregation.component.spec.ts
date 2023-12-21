import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteIntregationComponent } from './website-intregation.component';

describe('WebsiteIntregationComponent', () => {
  let component: WebsiteIntregationComponent;
  let fixture: ComponentFixture<WebsiteIntregationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsiteIntregationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsiteIntregationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
