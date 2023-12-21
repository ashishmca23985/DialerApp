import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatIntregationComponent } from './chat-intregation.component';

describe('ChatIntregationComponent', () => {
  let component: ChatIntregationComponent;
  let fixture: ComponentFixture<ChatIntregationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatIntregationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatIntregationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
