import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsupIntregationComponent } from './whatsup-intregation.component';

describe('WhatsupIntregationComponent', () => {
  let component: WhatsupIntregationComponent;
  let fixture: ComponentFixture<WhatsupIntregationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatsupIntregationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatsupIntregationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
