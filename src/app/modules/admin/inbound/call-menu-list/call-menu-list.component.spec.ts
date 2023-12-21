import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallMenuListComponent } from './call-menu-list.component';

describe('CallMenuListComponent', () => {
  let component: CallMenuListComponent;
  let fixture: ComponentFixture<CallMenuListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallMenuListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallMenuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
