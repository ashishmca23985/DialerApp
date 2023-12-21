import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialingFilterComponent } from './dialing-filter.component';

describe('DialingFilterComponent', () => {
  let component: DialingFilterComponent;
  let fixture: ComponentFixture<DialingFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialingFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialingFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
