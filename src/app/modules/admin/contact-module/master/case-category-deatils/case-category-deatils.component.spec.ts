import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseCategoryDeatilsComponent } from './case-category-deatils.component';

describe('CaseCategoryDeatilsComponent', () => {
  let component: CaseCategoryDeatilsComponent;
  let fixture: ComponentFixture<CaseCategoryDeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseCategoryDeatilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseCategoryDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
