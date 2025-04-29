import { Routes } from "@angular/router";
import { PersonajesListComponent } from "./personajes-list/personajes-list.component";

export const personajesRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: PersonajesListComponent,
      },

      {
        path: '**',
        redirectTo: 'list',
      },
    ],
  },
];


export default personajesRoutes;
