import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialerSettingComponent } from './dialer-setting.component';

describe('DialerSettingComponent', () => {
  let component: DialerSettingComponent;
  let fixture: ComponentFixture<DialerSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialerSettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialerSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
