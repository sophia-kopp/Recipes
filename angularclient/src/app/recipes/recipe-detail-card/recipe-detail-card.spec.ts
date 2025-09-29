import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetailCard } from './recipe-detail-card';

describe('RecipeDetailCard', () => {
  let component: RecipeDetailCard;
  let fixture: ComponentFixture<RecipeDetailCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeDetailCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeDetailCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
