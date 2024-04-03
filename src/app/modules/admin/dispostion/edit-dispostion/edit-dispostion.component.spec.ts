import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDispostionComponent } from './edit-dispostion.component';

describe('EditDispostionComponent', () => {
  let component: EditDispostionComponent;
  let fixture: ComponentFixture<EditDispostionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDispostionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDispostionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
