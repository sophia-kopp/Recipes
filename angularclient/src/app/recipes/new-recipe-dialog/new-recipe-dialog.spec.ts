import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRecipeDialog } from './new-recipe-dialog';

describe('NewRecipeDialog', () => {
  let component: NewRecipeDialog;
  let fixture: ComponentFixture<NewRecipeDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewRecipeDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewRecipeDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
