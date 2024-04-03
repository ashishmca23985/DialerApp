import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentLogComponent } from './agent-log.component';

describe('AgentLogComponent', () => {
  let component: AgentLogComponent;
  let fixture: ComponentFixture<AgentLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
