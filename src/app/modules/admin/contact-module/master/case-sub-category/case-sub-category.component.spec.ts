import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseSubCategoryComponent } from './case-sub-category.component';

describe('CaseSubCategoryComponent', () => {
  let component: CaseSubCategoryComponent;
  let fixture: ComponentFixture<CaseSubCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseSubCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseSubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
