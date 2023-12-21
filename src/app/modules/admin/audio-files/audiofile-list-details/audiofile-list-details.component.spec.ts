import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiofileListDetailsComponent } from './audiofile-list-details.component';

describe('AudiofileListDetailsComponent', () => {
  let component: AudiofileListDetailsComponent;
  let fixture: ComponentFixture<AudiofileListDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudiofileListDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudiofileListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
