import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateListDetailsComponent } from './template-list-details.component';

describe('TemplateListDetailsComponent', () => {
  let component: TemplateListDetailsComponent;
  let fixture: ComponentFixture<TemplateListDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateListDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
