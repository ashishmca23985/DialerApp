import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DidListComponent } from './did-list.component';

describe('DidListComponent', () => {
  let component: DidListComponent;
  let fixture: ComponentFixture<DidListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DidListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DidListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
