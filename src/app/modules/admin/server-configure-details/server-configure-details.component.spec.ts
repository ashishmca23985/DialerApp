import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerConfigureDetailsComponent } from './server-configure-details.component';

describe('ServerConfigureDetailsComponent', () => {
  let component: ServerConfigureDetailsComponent;
  let fixture: ComponentFixture<ServerConfigureDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerConfigureDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerConfigureDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
