import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentScriptComponent } from './agent-script.component';

describe('AgentScriptComponent', () => {
  let component: AgentScriptComponent;
  let fixture: ComponentFixture<AgentScriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentScriptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
