import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDispostionComponent } from './add-dispostion.component';

describe('AddDispostionComponent', () => {
  let component: AddDispostionComponent;
  let fixture: ComponentFixture<AddDispostionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDispostionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDispostionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
