import { Routes } from "@angular/router";
import { HeroesListComponent } from "./heroes-list/heroes-list.component";

export const heroesRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: HeroesListComponent,
      },

      {
        path: '**',
        redirectTo: 'list',
      },
    ],
  },
];


export default heroesRoutes;
