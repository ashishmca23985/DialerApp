import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialercalllogComponent } from './dialercalllog.component';

describe('DialercalllogComponent', () => {
  let component: DialercalllogComponent;
  let fixture: ComponentFixture<DialercalllogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialercalllogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialercalllogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
