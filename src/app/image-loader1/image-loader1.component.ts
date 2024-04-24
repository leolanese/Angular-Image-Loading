import { Component } from '@angular/core';
import { IMAGE_CONFIG, IMAGE_LOADER, ImageLoaderConfig, NgOptimizedImage, provideImgixLoader } from '@angular/common';

@Component({
  selector: 'app-image-loader1',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  providers: [
    {
      provide: IMAGE_CONFIG,
      useValue: {
        breakpoints: [380, 640, 1200, 1920, 2048, 3840],
        placeholderResolution: 25
      }
    }
  ],
  template: `
    <h3>default</h3>
    <img 
      src="./assets/a1.jpg" 
      alt="a1 default" />

    <h3>ngSrc</h3>
    <!-- Specify width + height attributes for your images to prevent layout shifts. Served built-in loaders from CDN -->
    <img 
      ngSrc="./assets/a1.jpg" 
      width="400" 
      height="300"
      alt="a1 optimised" />

    <h3>ngSrc + priority</h3>
    <!-- Specify the priority (large CFC) -->
    <img 
      ngSrc="./assets/a1.jpg" 
      priority
      width="400" 
      height="300"
      alt="a1 optimised priority" />

      
    <h3>ngSrc + sizes + ngSrcset (provide image candidates)</h3>
    <img 
      ngSrc="./assets/a1.jpg" 
      priority
      width="400" 
      height="300"
      sizes="(max-width: 768px) 100vw, 50vw"
      ngSrcset="100w, 200w"
      alt="a1 optimised placeholder Advanced 'sizes' values" />  

    <h3>ngSrc + priority LCP + disableOptimizedSrcset + fill</h3>
    <!--  No CDN? Disabling automatic srcset generation and make it fill (like backGroundImage) -->
    <div style="width: 400px; height: 300px; position: relative; display: block">
      <img 
        ngSrc="./assets/a1.jpg" 
        priority
        disableOptimizedSrcset
        fill
        alt="a1 optimised priority" />   
    </div>  

  `,
  styleUrl: './image-loader1.component.scss'
})
export class ImageLoader1Component {
  title = 'Speed up your Angular app with image optimisation'; 
}
