import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultcrmComponent } from './defaultcrm.component';

describe('DefaultcrmComponent', () => {
  let component: DefaultcrmComponent;
  let fixture: ComponentFixture<DefaultcrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultcrmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultcrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
