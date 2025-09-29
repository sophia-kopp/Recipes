import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteButton } from './favourite-button';

describe('FavouriteButton', () => {
  let component: FavouriteButton;
  let fixture: ComponentFixture<FavouriteButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavouriteButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavouriteButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
