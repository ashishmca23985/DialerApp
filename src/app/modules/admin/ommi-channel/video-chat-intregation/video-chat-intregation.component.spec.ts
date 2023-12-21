import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoChatIntregationComponent } from './video-chat-intregation.component';

describe('VideoChatIntregationComponent', () => {
  let component: VideoChatIntregationComponent;
  let fixture: ComponentFixture<VideoChatIntregationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoChatIntregationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoChatIntregationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
