import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { MealCard } from "../meal-card/meal-card";
import { RecipeService } from '../../services/recipe';
import { RecipeApiResponse } from '../../interfaces/irecipe';
import { Observable } from 'rxjs';

@Component({
  selector: "app-seafood",
  imports: [MealCard, CommonModule],
  templateUrl: "./seafood.html",
  styleUrl: "./seafood.css",
})
export class Seafood {
  recipes$: Observable<RecipeApiResponse>;

  constructor(private recipeService: RecipeService) {
    this.recipes$ = this.recipeService.getRecipes("seafood");
  }
}
