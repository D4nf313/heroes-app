import { Component } from '@angular/core';
import { SearchHeroeComponent } from "../components/search-heroe/search-heroe.component";

@Component({
  selector: 'app-heroes-list',
  imports: [SearchHeroeComponent],
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.css'
})
export class HeroesListComponent {



}
