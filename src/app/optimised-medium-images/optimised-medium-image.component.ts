import { IMAGE_CONFIG, IMAGE_LOADER, ImageLoaderConfig, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'optimised-medium-images',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
      <img
        alt="Optimised Medium Image"
        ngSrc="1*HNZPFINf7SzM_aBcXDi42Q.png"
        sizes="(max-width: 400px) 100vw, (max-width: 1200px) 50vw, 100vw"
        width="600"
        height="400"
        decoding="sync"
        priority
        placeholder />
  `,
  providers: [
    {
      provide: IMAGE_CONFIG,
      useValue: {
        breakpoints: [380, 640, 1200, 1920, 2048],
        placeholderResolution: 25
      }
    },
    {
      provide: IMAGE_LOADER,
      useValue: (config: ImageLoaderConfig) => {
        return `https://cdn-images-1.medium.com/max/${config.width}/${config.src}`;
      },
    },
  ]
})
export class OptimisedMediumImagesComponent { }