import { Routes } from "@angular/router";
import { PersonajesListComponent } from "./personajes-list/personajes-list.component";
import { LayoutComponent } from "./layout/layout.component";

export const personajesRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
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
