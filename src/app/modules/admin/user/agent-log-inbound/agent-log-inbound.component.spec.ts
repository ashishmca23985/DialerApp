import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentLogInboundComponent } from './agent-log-inbound.component';

describe('AgentLogInboundComponent', () => {
  let component: AgentLogInboundComponent;
  let fixture: ComponentFixture<AgentLogInboundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentLogInboundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentLogInboundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
