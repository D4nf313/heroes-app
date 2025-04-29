import { Routes } from "@angular/router";
import { PersonajesListComponent } from "./personajes-list/personajes-list.component";
import { LayoutComponent } from "./layout/layout.component";
import { DetailPersonajeComponent } from "./detail-personaje/detail-personaje.component";

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
        path: 'detail/:id',
        component: DetailPersonajeComponent,
      },

      {
        path: '**',
        redirectTo: 'list',
      },
    ],
  },
];


export default personajesRoutes;
