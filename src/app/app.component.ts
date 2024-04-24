import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { NavPanelComponent } from "./nav-panel/nav-panel.component";

export const APP_ROUTES = [
  provideRouter(routes)
];

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
      <app-nav-panel />
      <router-outlet></router-outlet>
    `,
    styleUrl: './app.component.scss',
    imports: [RouterOutlet,
              NavPanelComponent]
})
export class AppComponent {
  title = 'Angular-image-optimisation';
}
