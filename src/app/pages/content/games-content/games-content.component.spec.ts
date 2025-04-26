import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesContentComponent } from './games-content.component';

describe('GamesContentComponent', () => {
  let component: GamesContentComponent;
  let fixture: ComponentFixture<GamesContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamesContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
