import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-panel',
  standalone: true,
  imports: [
    RouterModule
  ],
  template: `
    <nav>
      <ul>
        <li><a routerLink="/defaults">Angular Defaults</a></li>
        <li><a routerLink="/unsplash">Image unSplash</a></li>
        <li><a routerLink="/medium">Image Medium</a></li>
        <li><a routerLink="/deferplaceholder">Defer placeholder</a></li>
        <li><a routerLink="/deferloading">Defer loading</a></li>
        <li><a routerLink="/deferonwhen">Defer on/when</a></li>
        <li><a routerLink="/deferoninteraction">Defer on interaction/when</a></li>
      </ul>
    </nav>
  `,
  styleUrl: './nav-panel.component.scss'
})
export class NavPanelComponent {

}
