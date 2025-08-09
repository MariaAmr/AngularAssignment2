import { Component } from '@angular/core';
import { MealCard } from "../meal-card/meal-card";
import { RecipeService } from '../../services/recipe';
import { CommonModule } from '@angular/common';
import { RecipeApiResponse } from '../../interfaces/irecipe';
import { Observable } from 'rxjs';

@Component({
  selector: "app-pasta",
  imports: [MealCard, CommonModule],
  templateUrl: "./pasta.html",
  styleUrl: "./pasta.css",
})
export class Pasta {
  recipes$: Observable<RecipeApiResponse>;

  constructor(private recipeService: RecipeService) {
    this.recipes$ = this.recipeService.getRecipes("pasta");
  }
}
