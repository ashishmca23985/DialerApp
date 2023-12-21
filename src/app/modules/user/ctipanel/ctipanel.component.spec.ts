import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtipanelComponent } from './ctipanel.component';

describe('CtipanelComponent', () => {
  let component: CtipanelComponent;
  let fixture: ComponentFixture<CtipanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtipanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtipanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
