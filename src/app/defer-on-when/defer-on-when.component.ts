import { Component } from '@angular/core';
import { OptimisedUnsplashImageComponent } from '../optimised-unsplash-image/optimised-unsplash-image';
import { ImageLoader1Component } from '../image-loader1/image-loader1.component';

@Component({
  selector: 'app-defer-on-when',
  standalone: true,
  imports: [      
    ImageLoader1Component,
    OptimisedUnsplashImageComponent],
    template: `
      <div #parsed></div>

      @defer (on viewport(parsed); when parsed.scrollHeight > 0) {
        <optimised-unsplash-image />
      } @placeholder {
        <div>placeholder</div>
      } @loading {
        <div>Loading...</div>
      } @error { 
        <div>Fail to load: Error!</div>
      }
  `,
})
export class DeferOnWhenComponent {

}
