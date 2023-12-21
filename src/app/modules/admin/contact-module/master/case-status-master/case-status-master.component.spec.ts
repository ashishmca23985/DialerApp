import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStatusMasterComponent } from './case-status-master.component';

describe('CaseStatusMasterComponent', () => {
  let component: CaseStatusMasterComponent;
  let fixture: ComponentFixture<CaseStatusMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseStatusMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseStatusMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
