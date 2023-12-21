import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseTypeDeatilsComponent } from './case-type-deatils.component';

describe('CaseTypeDeatilsComponent', () => {
  let component: CaseTypeDeatilsComponent;
  let fixture: ComponentFixture<CaseTypeDeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseTypeDeatilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseTypeDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
