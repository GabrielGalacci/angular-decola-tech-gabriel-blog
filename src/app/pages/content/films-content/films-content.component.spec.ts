import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsContentComponent } from './films-content.component';

describe('FilmsContentComponent', () => {
  let component: FilmsContentComponent;
  let fixture: ComponentFixture<FilmsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmsContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
