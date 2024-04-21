import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarryPotterMoviesComponent } from './harry-potter-movies.component';

describe('HarryPotterMoviesComponent', () => {
  let component: HarryPotterMoviesComponent;
  let fixture: ComponentFixture<HarryPotterMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HarryPotterMoviesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HarryPotterMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
