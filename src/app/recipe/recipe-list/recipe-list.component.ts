import { Component, OnInit } from '@angular/core';
import { Recipe } from '../Recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  standalone: false,
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  recipies: Recipe[] = [];

  constructor(private service: RecipeService) {}

  ngOnInit() {
    this.service.getRecipies().subscribe(data => {
      this.recipies = data;
    });
  }

}
