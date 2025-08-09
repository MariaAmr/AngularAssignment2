import { Component } from '@angular/core';
import { MealCard } from "../meal-card/meal-card";
import { RecipeService } from '../../services/recipe';
import { CommonModule } from '@angular/common';
import { RecipeApiResponse } from '../../interfaces/irecipe';
import { Observable } from 'rxjs';

@Component({
  selector: "app-pizza",
  imports: [MealCard, CommonModule],
  templateUrl: "./pizza.html",
  styleUrl: "./pizza.css",
})
export class Pizza {
  recipes$: Observable<RecipeApiResponse>;

  constructor(private recipeService: RecipeService) {
    this.recipes$ = this.recipeService.getRecipes("pizza");
  }
}
