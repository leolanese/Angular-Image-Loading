import { Component } from '@angular/core';
import { OptimisedUnsplashImageComponent } from '../optimised-unsplash-image/optimised-unsplash-image';

@Component({
    selector: 'app-defer',
    standalone: true,
    imports: [
      OptimisedUnsplashImageComponent
    ],
    template: `
      @defer {
        <optimised-unsplash-image />
      } @placeholder (minimum 500ms) {
        <p>Placeholder content</p>
      } @error { 
        <div>Fail to load: Error!</div>
      }
    `,
})
export class DeferPlaceholderComponent {

}
