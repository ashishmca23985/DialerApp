import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualcalllogComponent } from './manualcalllog.component';

describe('ManualcalllogComponent', () => {
  let component: ManualcalllogComponent;
  let fixture: ComponentFixture<ManualcalllogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualcalllogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManualcalllogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
