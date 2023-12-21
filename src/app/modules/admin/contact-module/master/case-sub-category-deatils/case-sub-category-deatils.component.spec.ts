import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseSubCategoryDeatilsComponent } from './case-sub-category-deatils.component';

describe('CaseSubCategoryDeatilsComponent', () => {
  let component: CaseSubCategoryDeatilsComponent;
  let fixture: ComponentFixture<CaseSubCategoryDeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseSubCategoryDeatilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseSubCategoryDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
