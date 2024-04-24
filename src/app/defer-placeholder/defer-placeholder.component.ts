import { Component } from '@angular/core';
import { OptimisedUnsplashImageComponent } from '../optimised-unsplash-image/optimised-unsplash-image';
import { ImageLoader1Component } from '../image-loader1/image-loader1.component';

@Component({
    selector: 'app-defer',
    standalone: true,
    imports: [
      ImageLoader1Component,
      OptimisedUnsplashImageComponent
    ],
    template: `
      @defer {
        <optimised-unsplash-image />
      } @placeholder (minimum 500ms) {
        <p>Placeholder content</p>
      }
    `,
})
export class DeferPlaceholderComponent {

}
