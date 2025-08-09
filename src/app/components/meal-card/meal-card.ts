import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IRecipe } from '../../interfaces/irecipe';

@Component({
  selector: "app-meal-card",
  imports: [CommonModule],
  templateUrl: "./meal-card.html",
  styleUrl: "./meal-card.css",
})
export class MealCard {
  @Input({ required: true }) recipe!: IRecipe;
}
