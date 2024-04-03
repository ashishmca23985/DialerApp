import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentLogOutboundComponent } from './agent-log-outbound.component';

describe('AgentLogOutboundComponent', () => {
  let component: AgentLogOutboundComponent;
  let fixture: ComponentFixture<AgentLogOutboundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentLogOutboundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentLogOutboundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
