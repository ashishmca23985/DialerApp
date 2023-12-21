import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseDeatilsComponent } from './case-deatils.component';

describe('CaseDeatilsComponent', () => {
  let component: CaseDeatilsComponent;
  let fixture: ComponentFixture<CaseDeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseDeatilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
