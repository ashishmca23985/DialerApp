import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiofileListComponent } from './audiofile-list.component';

describe('AudiofileListComponent', () => {
  let component: AudiofileListComponent;
  let fixture: ComponentFixture<AudiofileListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudiofileListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudiofileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
