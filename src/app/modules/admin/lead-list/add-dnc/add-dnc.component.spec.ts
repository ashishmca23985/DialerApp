import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDncComponent } from './add-dnc.component';

describe('AddDncComponent', () => {
  let component: AddDncComponent;
  let fixture: ComponentFixture<AddDncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDncComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
