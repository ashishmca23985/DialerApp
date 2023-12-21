import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMgtDetailsComponent } from './contact-mgt-details.component';

describe('ContactMgtDetailsComponent', () => {
  let component: ContactMgtDetailsComponent;
  let fixture: ComponentFixture<ContactMgtDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactMgtDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactMgtDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
