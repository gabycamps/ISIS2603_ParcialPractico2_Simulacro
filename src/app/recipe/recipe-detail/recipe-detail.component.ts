import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  standalone: false,
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent implements OnInit {
  recipe: any;

  constructor(private service: RecipeService, private route: ActivatedRoute) {}
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getRecipe(id).subscribe((data) => {
      this.recipe = data;
    });
  }
}
