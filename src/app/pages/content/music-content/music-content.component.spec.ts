import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicContentComponent } from './music-content.component';

describe('MusicContentComponent', () => {
  let component: MusicContentComponent;
  let fixture: ComponentFixture<MusicContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
