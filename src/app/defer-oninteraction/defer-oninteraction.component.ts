import { Component } from '@angular/core';
import { OptimisedUnsplashImageComponent } from '../optimised-unsplash-image/optimised-unsplash-image';

@Component({
    selector: 'app-defer',
    standalone: true,
    imports: [
      OptimisedUnsplashImageComponent
    ],
    template: `
      <button type="button" #loaded>interaction!</button>

      @defer (on interaction(loaded)) {
        <optimised-unsplash-image />
      } @placeholder {
        <div>Placeholder</div>
      } @error { 
        <div>Fail to load: Error!</div>
      }
    `,
})
export class DeferOninteractionComponent {

}
