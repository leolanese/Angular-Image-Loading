import { Component } from '@angular/core';
import { OptimisedUnsplashImageComponent } from '../optimised-unsplash-image/optimised-unsplash-image';

@Component({
  selector: 'app-defer-loading',
  standalone: true,
  imports: [      
    OptimisedUnsplashImageComponent
  ],
  template: `
      @defer {  
        <optimised-unsplash-image />
      } @loading (after 1ms; minimum 1s) {
        <img alt="loading..." src="./assets/loading.gif" />
      } @error { 
        <div>Fail to load: Error!</div>
      }
  `,
})
export class DeferLoadingComponent {

}
