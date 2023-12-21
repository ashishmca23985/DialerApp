import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMgtComponent } from './contact-mgt.component';

describe('ContactMgtComponent', () => {
  let component: ContactMgtComponent;
  let fixture: ComponentFixture<ContactMgtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactMgtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactMgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
